"use client";

// Stampeo — loyalty card SaaS mockup
// Shows: digital loyalty card with stamp grid, Apple Wallet style
export function StampeoMockup() {
  return (
    <div className="relative flex h-full w-full items-center justify-center select-none">
      {/* Phone frame */}
      <div
        className="relative overflow-hidden rounded-[2.2rem]"
        style={{
          width: 210,
          height: 390,
          background: "#0D0F14",
          border: "1.5px solid rgba(255,255,255,0.08)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
            9:41
          </span>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-3 rounded-sm" style={{ background: "rgba(255,255,255,0.4)" }} />
            <div className="h-1 w-1 rounded-full" style={{ background: "#F59E0B" }} />
          </div>
        </div>

        {/* Wallet card */}
        <div
          className="mx-3 mt-2 overflow-hidden rounded-2xl"
          style={{ background: "#1A1A1A", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {/* Card header */}
          <div
            className="px-4 pt-3 pb-2"
            style={{ background: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div
                  style={{
                    fontSize: 8,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em",
                    fontFamily: "monospace",
                  }}
                >
                  LOYALTY CARD
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    fontFamily: "monospace",
                    marginTop: 1,
                  }}
                >
                  Stampeo
                </div>
              </div>
              {/* Logo mark */}
              <div
                className="flex items-center justify-center rounded-lg"
                style={{ width: 28, height: 28, background: "rgba(255,255,255,0.2)" }}
              >
                <span style={{ fontSize: 14 }}>✸</span>
              </div>
            </div>
          </div>

          {/* Stamp grid */}
          <div className="px-4 py-3">
            <div
              style={{
                fontSize: 7,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
                marginBottom: 8,
              }}
            >
              TAMPONS · 6/8
            </div>
            <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-lg"
                  style={{
                    height: 28,
                    background:
                      i < 6
                        ? "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)"
                        : "rgba(255,255,255,0.05)",
                    border: i < 6 ? "none" : "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {i < 6 && <span style={{ fontSize: 12, color: "#fff" }}>✸</span>}
                </div>
              ))}
            </div>

            {/* Reward label */}
            <div
              className="mt-3 rounded-lg px-3 py-1.5 text-center"
              style={{
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.2)",
              }}
            >
              <span
                style={{
                  fontSize: 7,
                  color: "#F59E0B",
                  letterSpacing: "0.08em",
                  fontFamily: "monospace",
                }}
              >
                30 JOURS GRATUIT A 8 TAMPONS
              </span>
            </div>
          </div>
        </div>

        {/* Apple / Google Wallet badges */}
        <div className="mx-3 mt-2 flex gap-2">
          {["Apple Wallet", "Google Wallet"].map((label) => (
            <div
              key={label}
              className="flex flex-1 items-center justify-center rounded-xl py-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span
                style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* QR code placeholder */}
        <div className="mt-3 flex flex-col items-center">
          <div className="rounded-xl p-2" style={{ background: "#fff", width: 52, height: 52 }}>
            {/* Mini QR grid */}
            <div className="grid gap-0.5" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
              {Array.from({ length: 25 }).map((_, i) => {
                const filled = [
                  0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, 7, 12, 17,
                ].includes(i);
                return (
                  <div
                    key={i}
                    style={{
                      width: 6,
                      height: 6,
                      background: filled ? "#000" : "transparent",
                      borderRadius: 1,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <span
            style={{
              fontSize: 6,
              color: "rgba(255,255,255,0.25)",
              fontFamily: "monospace",
              marginTop: 4,
            }}
          >
            SCAN TO ADD
          </span>
        </div>
      </div>
    </div>
  );
}
