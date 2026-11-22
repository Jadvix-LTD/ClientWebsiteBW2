"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { MB, UPLOAD, fileExtension } from "@/lib/enquiry";
import { services } from "@/lib/services";
import { OPEN_QUOTE_EVENT } from "./QuoteButton";

type Status = "idle" | "sending" | "success" | "error";

/** "Connect with Us" popup: collects the enquiry fields from the brief and posts them to /api/enquiry. */
export function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const show = () => {
      setOpen(true);
      setStatus("idle");
      setErrors({});
      setMessage("");
    };
    window.addEventListener(OPEN_QUOTE_EVENT, show);
    if (window.location.hash === "#quote") show();
    const onHash = () => window.location.hash === "#quote" && show();
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener(OPEN_QUOTE_EVENT, show);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    firstField.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    if (window.location.hash === "#quote") history.replaceState(null, "", window.location.pathname);
  }

  function checkFiles(list: File[]) {
    if (list.length > UPLOAD.maxFiles) return `Please attach up to ${UPLOAD.maxFiles} files.`;
    for (const f of list) {
      if (!(UPLOAD.extensions as readonly string[]).includes(fileExtension(f.name))) return `"${f.name}" is not an accepted file type.`;
      if (f.size > UPLOAD.maxFileMB * MB) return `"${f.name}" is larger than ${UPLOAD.maxFileMB} MB.`;
    }
    if (list.reduce((n, f) => n + f.size, 0) > UPLOAD.maxTotalMB * MB) return `Attachments must total ${UPLOAD.maxTotalMB} MB or less.`;
    return "";
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const files = (form.elements.namedItem("files") as HTMLInputElement).files;
    const fileError = checkFiles(Array.from(files ?? []));
    if (fileError) {
      setErrors({ files: fileError });
      return;
    }
    setStatus("sending");
    setErrors({});
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: new FormData(form) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: Record<string, string> };
      if (res.ok && json.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrors(json.errors ?? {});
        setMessage(json.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please try again.");
    }
  }

  if (!open) return null;

  const err = (n: string) => (errors[n] ? <p className="error">{errors[n]}</p> : null);

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <button type="button" className="modal-close" onClick={close} aria-label="Close">
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        </button>
        <h2 id="quote-title">Connect with Us</h2>

        {status === "success" ? (
          <p className="status" role="status">
            Thank you. Your enquiry has been received and our team will be in touch shortly.
          </p>
        ) : (
          <form onSubmit={onSubmit} encType="multipart/form-data">
            <div style={{ display: "none" }} aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <label htmlFor="q-name">Name<span className="req">*</span></label>
            <input ref={firstField} id="q-name" name="name" className="field" required minLength={2} maxLength={120} autoComplete="name" />
            {err("name")}

            <label htmlFor="q-company">Company<span className="req">*</span></label>
            <input id="q-company" name="company" className="field" required minLength={2} maxLength={160} autoComplete="organization" />
            {err("company")}

            <label htmlFor="q-email">Business Email<span className="req">*</span></label>
            <input id="q-email" name="email" type="email" className="field" required maxLength={200} autoComplete="email" />
            {err("email")}

            <label htmlFor="q-phone">Phone</label>
            <input id="q-phone" name="phone" type="tel" className="field" maxLength={40} autoComplete="tel" />

            <label htmlFor="q-service">Required Service<span className="req">*</span></label>
            <select id="q-service" name="service" className="field" required defaultValue="">
              <option value="" disabled>Select a service</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>{s.title}</option>
              ))}
              <option value="other">Other / not sure</option>
            </select>
            {err("service")}

            <label htmlFor="q-deadline">Deadline</label>
            <input id="q-deadline" name="deadline" type="date" className="field" />
            {err("deadline")}

            <label htmlFor="q-description">Project Description<span className="req">*</span></label>
            <textarea id="q-description" name="description" className="field" required minLength={20} maxLength={6000} />
            {err("description")}

            <label htmlFor="q-files">Drawings / Documents</label>
            <input
              id="q-files"
              name="files"
              type="file"
              multiple
              className="file-field"
              accept={UPLOAD.extensions.map((x) => `.${x}`).join(",")}
            />
            <p className="hint">
              Up to {UPLOAD.maxFiles} files, {UPLOAD.maxFileMB} MB each (PDF, DWG, RVT, IFC, ZIP and more)
            </p>
            {err("files")}

            <label className="consent">
              <input type="checkbox" name="consent" value="yes" required />
              <span>
                I agree to my details being used to respond to this enquiry, as described in the{" "}
                <Link href="/privacy-policy" onClick={close}>privacy policy</Link>.
              </span>
            </label>
            {err("consent")}

            <button type="submit" className="btn-send" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>
            {status === "error" && <p className="status error" aria-live="polite">{message}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
