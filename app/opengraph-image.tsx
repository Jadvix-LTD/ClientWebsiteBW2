import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Beaver and Weaver Engineering Services: BIM / CAD / Detailing Engineering Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "brand", "logo-mark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ffffff", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22, padding: "44px 72px 30px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={100} height={116} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: "#0d3a6b" }}>BEAVER AND WEAVER</div>
            <div style={{ display: "flex", fontSize: 20, fontWeight: 600, letterSpacing: 6, color: "#027bca", marginTop: 4 }}>ENGINEERING SERVICES</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", padding: "0 72px", background: "#efefef" }}>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#000", lineHeight: 1.05 }}>BIM / CAD / DETAILING</div>
          <div style={{ display: "flex", fontSize: 60, fontWeight: 700, color: "#000", lineHeight: 1.05 }}>ENGINEERING SERVICES</div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 26, color: "#404040" }}>UK · Europe · North America</div>
        </div>
        <div style={{ display: "flex", height: 14 }}>
          <div style={{ flex: 486, background: "#027bca" }} />
          <div style={{ flex: 300, background: "#f68221" }} />
          <div style={{ flex: 214, background: "#706f73" }} />
        </div>
      </div>
    ),
    size,
  );
}
