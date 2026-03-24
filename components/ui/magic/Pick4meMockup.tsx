"use client";

// Pick4Me — mobile delivery app mockup
// Shows: map background, live tracking card, chat badge, socket.io status
export function Pick4meMockup() {
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
            <div className="h-1 w-1 rounded-full" style={{ background: "#F97316" }} />
          </div>
        </div>

        {/* Map background — abstract grid + route */}
        <div
          className="relative mx-3 overflow-hidden rounded-xl"
          style={{ height: 160, background: "#141820" }}
        >
          {/* Grid lines */}
          <svg width="100%" height="100%" style={{ position: "absolute", opacity: 0.12 }}>
            {[20, 40, 60, 80, 100, 120, 140].map((y) => (
              <line
                key={`h${y}`}
                x1="0"
                y1={y}
                x2="200"
                y2={y}
                stroke="#00D4FF"
                strokeWidth="0.5"
              />
            ))}
            {[30, 60, 90, 120, 150, 180].map((x) => (
              <line
                key={`v${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="200"
                stroke="#00D4FF"
                strokeWidth="0.5"
              />
            ))}
          </svg>

          {/* Route polyline */}
          <svg width="100%" height="100%" style={{ position: "absolute" }}>
            <polyline
              points="30,130 55,100 80,80 120,65 150,40"
              fill="none"
              stroke="#F97316"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="4 3"
              opacity="0.7"
            />
            {/* Destination pin */}
            <circle cx="150" cy="40" r="5" fill="#F97316" opacity="0.9" />
            <circle
              cx="150"
              cy="40"
              r="9"
              fill="none"
              stroke="#F97316"
              strokeWidth="1"
              opacity="0.4"
            />
            {/* Picker location */}
            <circle cx="30" cy="130" r="5" fill="#00D4FF" opacity="0.9" />
            <circle cx="30" cy="130" r="10" fill="rgba(0,212,255,0.15)" />
          </svg>

          {/* ETA badge */}
          <div
            className="absolute top-2 right-2 rounded-lg px-2 py-1"
            style={{
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{ fontSize: 8, color: "#F97316", fontFamily: "monospace", fontWeight: 700 }}
            >
              ETA 4 min
            </span>
          </div>

          {/* LIVE badge */}
          <div
            className="absolute top-2 left-2 flex items-center gap-1 rounded-full px-2 py-1"
            style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span style={{ fontSize: 7, color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>
              LIVE
            </span>
          </div>
        </div>

        {/* Order card */}
        <div
          className="mx-3 mt-2.5 rounded-xl p-3"
          style={{ background: "#1A1E28", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="mb-2 flex items-center justify-between">
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
              COMMANDE #P4M-8821
            </span>
            <span
              className="rounded-full px-2 py-0.5"
              style={{
                fontSize: 8,
                background: "rgba(249,115,22,0.15)",
                color: "#F97316",
                fontFamily: "monospace",
              }}
            >
              EN ROUTE
            </span>
          </div>
          {/* Picker info */}
          <div className="mb-3 flex items-center gap-2">
            <div
              className="flex flex-shrink-0 items-center justify-center rounded-full text-[8px] font-bold"
              style={{
                width: 24,
                height: 24,
                background: "linear-gradient(135deg, #F97316, #EF4444)",
                color: "white",
              }}
            >
              AK
            </div>
            <div>
              <div style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>
                Amine K.
              </div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>
                ⭐ 4.9 · 142 livraisons
              </div>
            </div>
          </div>

          {/* Items row */}
          <div className="flex gap-1.5">
            {["Courses", "Carrefour"].map((tag) => (
              <span
                key={tag}
                className="rounded-md px-2 py-0.5"
                style={{
                  fontSize: 7,
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: "monospace",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Socket.IO chat + payment strip */}
        <div className="mx-3 mt-2 flex gap-2">
          {/* Chat bubble */}
          <div
            className="flex flex-1 items-center gap-1.5 rounded-xl px-2.5 py-2"
            style={{ background: "#1A1E28", border: "1px solid rgba(0,212,255,0.1)" }}
          >
            <div
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: "#00D4FF" }}
            />
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)", fontFamily: "monospace" }}>
              Chat temps réel
            </span>
            <div
              className="ml-auto flex items-center justify-center rounded-full"
              style={{
                width: 14,
                height: 14,
                background: "#00D4FF",
                fontSize: 7,
                color: "#000",
                fontWeight: 700,
              }}
            >
              2
            </div>
          </div>
          {/* Payment badge */}
          <div
            className="flex items-center gap-1 rounded-xl px-2.5 py-2"
            style={{ background: "#1A1E28", border: "1px solid rgba(249,115,22,0.1)" }}
          >
            <span style={{ fontSize: 9, color: "#F97316" }}>€</span>
            <span style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>
              Revolut
            </span>
          </div>
        </div>

        {/* Bottom nav */}
        <div
          className="absolute right-0 bottom-0 left-0 flex items-center justify-around px-4 py-3"
          style={{ background: "#0D0F14", borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          {[
            { label: "Home", active: false },
            { label: "Track", active: true },
            { label: "Orders", active: false },
            { label: "Profile", active: false },
          ].map(({ label, active }) => (
            <div key={label} className="flex flex-col items-center gap-0.5">
              <div
                className="h-3.5 w-3.5 rounded-sm"
                style={{ background: active ? "#F97316" : "rgba(255,255,255,0.12)" }}
              />
              <span
                style={{
                  fontSize: 6,
                  color: active ? "#F97316" : "rgba(255,255,255,0.25)",
                  fontFamily: "monospace",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Notification toast floating outside phone */}
      <div
        className="absolute top-16 -right-2 max-w-[120px] rounded-xl px-3 py-2"
        style={{
          background: "rgba(15,18,26,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(249,115,22,0.2)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        }}
      >
        <div className="mb-1 flex items-center gap-1.5">
          <div
            className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
            style={{ background: "#F97316" }}
          />
          <span style={{ fontSize: 7, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
            FIREBASE FCM
          </span>
        </div>
        <p style={{ fontSize: 8, color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
          Amine est arrivé au point de collecte !
        </p>
      </div>

      {/* WebSocket indicator floating below */}
      <div
        className="absolute bottom-24 -left-2 flex items-center gap-1.5 rounded-xl px-2.5 py-1.5"
        style={{
          background: "rgba(15,18,26,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(0,212,255,0.15)",
        }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
        </span>
        <span style={{ fontSize: 7, color: "rgba(0,212,255,0.7)", fontFamily: "monospace" }}>
          Socket.IO connected
        </span>
      </div>
    </div>
  );
}
