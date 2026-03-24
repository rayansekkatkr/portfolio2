import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rayan Sekkat, Full-Stack Developer & Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#050506",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-80px",
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-60px",
          width: "500px",
          height: "500px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(94,58,238,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Top: label */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(0,212,255,0.5)",
          }}
        />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "rgba(0,212,255,0.6)",
          }}
        >
          {"// portfolio"}
        </span>
      </div>

      {/* Middle: main content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#F0EEE9",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Rayan Sekkat
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(240,238,233,0.45)",
            fontWeight: "400",
            letterSpacing: "0.01em",
          }}
        >
          Full-Stack Developer & Product Engineer
        </div>
        <div
          style={{
            marginTop: "8px",
            fontSize: "16px",
            color: "rgba(240,238,233,0.28)",
            maxWidth: "640px",
            lineHeight: 1.6,
          }}
        >
          Building SaaS platforms and AI tools that ship to production. From architecture to the
          first paying user.
        </div>
      </div>

      {/* Bottom: stats + badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "3", label: "SaaS in production" },
            { value: "15+", label: "Projects shipped" },
            { value: "3+", label: "Years experience" },
          ].map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#F0EEE9",
                  fontFamily: "monospace",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "10px 22px",
            borderRadius: "9999px",
            border: "1px solid rgba(0,212,255,0.25)",
            background: "rgba(0,212,255,0.06)",
            color: "rgba(0,212,255,0.8)",
            fontSize: "13px",
            letterSpacing: "0.05em",
          }}
        >
          rayansekkat.com
        </div>
      </div>
    </div>,
    { ...size }
  );
}
