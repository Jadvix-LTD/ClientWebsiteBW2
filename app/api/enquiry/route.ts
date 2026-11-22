import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { MB, UPLOAD, fileExtension } from "@/lib/enquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Errors = Record<string, string>;

const line = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.replace(/[\r\n\t]+/g, " ").trim().slice(0, max) : "";
const block = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const safeFileName = (name: string) => name.replace(/[^\w.\- ()]+/g, "_").slice(0, 120) || "attachment";

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn’t read that submission. Please try again." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (line(form.get("website"), 200)) return NextResponse.json({ ok: true });

  const data = {
    name: line(form.get("name"), 120),
    company: line(form.get("company"), 160),
    email: line(form.get("email"), 200),
    phone: line(form.get("phone"), 40),
    service: line(form.get("service"), 80),
    deadline: line(form.get("deadline"), 20),
    description: block(form.get("description"), 6000),
    consent: line(form.get("consent"), 10),
  };

  const errors: Errors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (data.company.length < 2) errors.company = "Please enter your company name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) errors.email = "Please enter a valid business email.";
  const service = services.find((s) => s.slug === data.service);
  if (!service && data.service !== "other") errors.service = "Please choose the service you need.";
  if (data.description.length < 20) errors.description = "Please describe the project in a little more detail (20+ characters).";
  if (data.deadline && !/^\d{4}-\d{2}-\d{2}$/.test(data.deadline)) errors.deadline = "Please choose a valid date.";
  if (data.consent !== "yes") errors.consent = "Please confirm you agree to us using your details to respond.";

  const files = form.getAll("files").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > UPLOAD.maxFiles) errors.files = `Please attach up to ${UPLOAD.maxFiles} files.`;
  const total = files.reduce((sum, f) => sum + f.size, 0);
  if (total > UPLOAD.maxTotalMB * MB) errors.files = `Attachments must total ${UPLOAD.maxTotalMB} MB or less.`;
  for (const f of files) {
    if (!(UPLOAD.extensions as readonly string[]).includes(fileExtension(f.name))) {
      errors.files = `“${f.name}” isn’t an accepted file type.`;
    } else if (f.size > UPLOAD.maxFileMB * MB) {
      errors.files = `“${f.name}” is larger than ${UPLOAD.maxFileMB} MB.`;
    }
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors, message: "Please check the highlighted fields." }, { status: 400 });
  }

  const serviceTitle = service?.title ?? "Other / not sure";
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Company", data.company],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Service", serviceTitle],
    ["Deadline", data.deadline || "—"],
    ["Attachments", files.length ? files.map((f) => `${f.name} (${(f.size / MB).toFixed(1)} MB)`).join(", ") : "none"],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nProject description:\n${data.description}`;
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">${rows
    .map(([k, v]) => `<tr><td style="color:#5B7083"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px"><strong>Project description</strong><br>${escapeHtml(
    data.description,
  ).replace(/\n/g, "<br>")}</p>`;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, ENQUIRY_TO, ENQUIRY_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[enquiry] SMTP not configured – enquiry received in development:\n" + text);
      return NextResponse.json({ ok: true, dev: true });
    }
    console.error("[enquiry] SMTP is not configured; enquiry could not be delivered.");
    return NextResponse.json(
      { ok: false, message: `Our form is temporarily unavailable. Please email us at ${site.email}.` },
      { status: 503 },
    );
  }

  try {
    const port = Number(SMTP_PORT || 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    await transporter.sendMail({
      from: ENQUIRY_FROM || SMTP_USER,
      to: ENQUIRY_TO || site.email,
      replyTo: data.email,
      subject: `Quote request: ${serviceTitle} – ${data.company}`,
      text,
      html,
      attachments: await Promise.all(
        files.map(async (f) => ({ filename: safeFileName(f.name), content: Buffer.from(await f.arrayBuffer()) })),
      ),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] send failed", err);
    return NextResponse.json(
      { ok: false, message: `Something went wrong sending your enquiry. Please try again or email ${site.email}.` },
      { status: 502 },
    );
  }
}
