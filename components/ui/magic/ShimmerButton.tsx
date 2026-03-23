"use client";

// 21st.dev ShimmerButton
// A button with an animated shimmer sweep effect.

import React from "react";

interface ShimmerButtonProps {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children: React.ReactNode;
  as?: "button" | "a";
  href?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function ShimmerButton({
  shimmerColor = "rgba(255,255,255,0.12)",
  shimmerSize = "0.08em",
  borderRadius = "9999px",
  shimmerDuration = "2.2s",
  background = "#00D4FF",
  className = "",
  children,
  as = "button",
  href,
  onClick,
  type = "button",
  disabled,
  style,
}: ShimmerButtonProps) {
  const sharedStyle: React.CSSProperties = {
    ["--shimmer-color" as string]: shimmerColor,
    ["--shimmer-size" as string]: shimmerSize,
    ["--border-radius" as string]: borderRadius,
    ["--shimmer-duration" as string]: shimmerDuration,
    background,
    borderRadius,
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

  const inner = (
    <>
      {/* shimmer sweep */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: `-${shimmerSize}`,
          borderRadius: "inherit",
          background: `conic-gradient(from 0deg, transparent 0%, ${shimmerColor} 10%, transparent 20%)`,
          animation: `shimmer-spin ${shimmerDuration} linear infinite`,
          WebkitMaskImage: `radial-gradient(closest-side, transparent 92%, black 100%)`,
        }}
      />
      <style>{`
        @keyframes shimmer-spin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </>
  );

  if (as === "a") {
    return (
      <a href={href} className={className} style={sharedStyle} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
      style={sharedStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {inner}
    </button>
  );
}
