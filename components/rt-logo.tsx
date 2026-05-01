"use client";

/**
 * River Tyne (RT) brand logo — SVG recreation of the eye/diamond mark.
 * Two swooping arrows (green + blue) encircle an inner "RT" monogram.
 */
export function RTLogo({
  size = 44,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  const navy = light ? "#ffffff" : "#1B2D5A";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="River Tyne logo"
    >
      <defs>
        <linearGradient id="rtGreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E9E6F" />
          <stop offset="100%" stopColor="#45B585" />
        </linearGradient>
        <linearGradient id="rtBlue" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#2088C0" />
          <stop offset="100%" stopColor="#1B2D5A" />
        </linearGradient>
      </defs>

      {/* Green arrow – top-right curve */}
      <path
        d="M22 68 C10 48 18 24 40 16 C54 10 70 14 82 24 L88 16 L92 28 L80 30 C70 22 56 18 44 22 C28 28 20 46 28 62 Z"
        fill="url(#rtGreen)"
      />

      {/* Blue arrow – bottom-left curve */}
      <path
        d="M98 52 C110 72 102 96 80 104 C66 110 50 106 38 96 L32 104 L28 92 L40 90 C50 98 64 102 76 98 C92 92 100 74 92 58 Z"
        fill="url(#rtBlue)"
      />

      {/* Inner frame */}
      <rect x="36" y="36" width="48" height="48" rx="14" fill={navy} />
      <rect x="41" y="41" width="38" height="38" rx="10" fill="white" />

      {/* RT monogram */}
      <text
        x="60"
        y="67"
        textAnchor="middle"
        fontSize="22"
        fontWeight="bold"
        fill="#1B2D5A"
        fontFamily="sans-serif"
        letterSpacing="1"
      >
        RT
      </text>
    </svg>
  );
}
