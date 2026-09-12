import React from "react";

export function IconicRLogo({ size = 36, className = "", withGlow = true }) {
  const uniqueId = React.useId().replace(/:/g, "");

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {withGlow && (
        <div
          className="absolute inset-0 rounded-xl bg-gradient-to-tr from-cyan-500/40 via-indigo-500/30 to-fuchsia-500/40 blur-md pointer-events-none -z-10 group-hover:blur-lg transition-all duration-300"
        />
      )}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_12px_rgba(6,182,212,0.45)]"
      >
        <defs>
          {/* Main Vibrant Cyberpunk Gradient */}
          <linearGradient id={`rGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          {/* Accent Gold/Cyan Spark Gradient */}
          <linearGradient id={`sparkGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          {/* Dark Glass Squircle Background */}
          <linearGradient id={`bgGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Border Stroke Gradient */}
          <linearGradient id={`borderGrad-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0.8)" />
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="100%" stopColor="rgba(236, 72, 153, 0.8)" />
          </linearGradient>
        </defs>

        {/* Outer Squircle Badge with Border */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="26"
          fill={`url(#bgGrad-${uniqueId})`}
          stroke={`url(#borderGrad-${uniqueId})`}
          strokeWidth="3"
        />

        {/* Inner Subtle Mesh Glow */}
        <circle cx="50" cy="50" r="32" fill="#06b6d4" opacity="0.08" />

        {/* Precision Geometric Iconic R Glyph */}
        {/* Vertical Left Stem */}
        <path
          d="M26 23C26 20.7909 27.7909 19 30 19H38C40.2091 19 42 20.7909 42 23V77C42 79.2091 40.2091 81 38 81H30C27.7909 81 26 79.2091 26 77V23Z"
          fill={`url(#rGrad-${uniqueId})`}
        />

        {/* Upper Loop of R */}
        <path
          d="M38 19H58C68.4934 19 77 27.5066 77 38C77 48.4934 68.4934 57 58 57H38V19ZM42 45H58C61.866 45 65 41.866 65 38C65 34.134 61.866 31 58 31H42V45Z"
          fill={`url(#rGrad-${uniqueId})`}
        />

        {/* Dynamic Forward Slash Kick Leg of R */}
        <path
          d="M50 51L69.5 77.2C70.8 78.9 72.8 80 75 80H78.5C80.8 80 82.2 77.5 80.9 75.6L59 47L50 51Z"
          fill={`url(#rGrad-${uniqueId})`}
        />

        {/* Top-Right Neon Tech Dot / Energy Indicator */}
        <circle cx="76" cy="24" r="5" fill={`url(#sparkGrad-${uniqueId})`} />
        <circle cx="76" cy="24" r="2.5" fill="#ffffff" />
      </svg>
    </div>
  );
}
