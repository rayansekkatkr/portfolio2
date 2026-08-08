import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Latin-only text: the default OG font has no Korean glyphs, so both locales
// share this card rather than risk missing characters on /ko previews.
export default async function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#0a0d12",
        color: "#f5f1e8",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#c9ff63",
        }}
      >
        Seoul, South Korea · Available for full-time roles
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 120, lineHeight: 1 }}>Rayan Sekkat.</div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            width: 96,
            height: 8,
            backgroundColor: "#c9ff63",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>Full-Stack Engineer</div>
        <div style={{ display: "flex", fontSize: 30, color: "#9da3ad" }}>
          Backend Engineering · Cloud &amp; DevOps
        </div>
      </div>
    </div>,
    size
  );
}
