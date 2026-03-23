"use client";

// 21st.dev BorderBeam
// An animated beam of light that travels around the border of a container.

interface BorderBeamProps {
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

export function BorderBeam({
  size = 200,
  duration = 12,
  delay = 0,
  colorFrom = "#00D4FF",
  colorTo = "#4338ca",
  className = "",
}: BorderBeamProps) {
  return (
    <>
      <style>{`
        @keyframes border-beam {
          0%   { offset-distance: 0%; }
          100% { offset-distance: 100%; }
        }
      `}</style>
      <span
        aria-hidden="true"
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            background: `linear-gradient(${colorFrom}, ${colorTo})`,
            filter: "blur(12px)",
            opacity: 0.6,
            offsetPath: `rect(0 auto auto 0 round inherit)`,
            animation: `border-beam ${duration}s linear ${delay}s infinite`,
          }}
        />
      </span>
    </>
  );
}
