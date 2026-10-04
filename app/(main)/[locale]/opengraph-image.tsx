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
        backgroundColor: "#0f0f0e",
        color: "#efede7",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#ff5d30",
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
            backgroundColor: "#ff5d30",
          }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
          Backend &amp; DevOps Engineer
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#a6a39b" }}>
          NestJS · FastAPI · CI/CD · Kubernetes · AWS
        </div>
      </div>
    </div>,
    size
  );
}
