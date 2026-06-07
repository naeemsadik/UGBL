"use client";

/* 
  Pin positions are expressed as % of the SVG viewBox (437.8 × 601.2).
  Geographic coordinates → SVG pixel:
    lon_min=88.01, lon_max=92.67 → width 437.8px  (93.8 px/deg)
    lat_max=26.64, lat_min=20.74 → height 601.2px (101.9 px/deg)
    x = (lon - 88.01) * 93.8
    y = (26.64 - lat) * 101.9
*/
export const OFFICES = [
  {
    id: "dhaka",
    label: "Dhaka",
    sublabel: "Head Office",
    // 90.40°E, 23.72°N → x≈224, y≈297
    xPct: 51.2,
    yPct: 49.4,
  },
  {
    id: "chattogram",
    label: "Chattogram",
    sublabel: "Branch Office",
    // 91.82°E, 22.34°N → x≈357, y≈437
    xPct: 81.6,
    yPct: 72.7,
  },
  {
    id: "khulna",
    label: "Khulna/Mongla",
    sublabel: "Branch Office",
    // 89.56°E, 22.82°N → x≈145, y≈388
    xPct: 33.1,
    yPct: 64.5,
  },
  {
    id: "payra",
    label: "Payra",
    sublabel: "Port Office",
    // 90.27°E, 22.04°N → x≈212, y≈467
    xPct: 48.4,
    yPct: 77.7,
  },
];

export function BangladeshMap({
  activeId,
  onHover,
}: {
  activeId: string | null;
  onHover: (id: string | null) => void;
}) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "137.4%" }}>
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#07111f]" />

      {/* Subtle grid lines */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a2d4a" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Dot-matrix Bangladesh map using CSS mask */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2a5298 1.2px, transparent 1.2px)",
          backgroundSize: "8px 8px",
          WebkitMaskImage: "url('/bangladesh.svg')",
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: "url('/bangladesh.svg')",
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          opacity: 0.6,
        }}
      />

      {/* Bangladesh outline glow */}
      <img
        src="/bangladesh.svg"
        alt=""
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(400%) hue-rotate(195deg) brightness(90%) contrast(85%) opacity(0.25)",
        }}
        aria-hidden
      />

      {/* Office pins — hexagonal BGN-style */}
      {OFFICES.map((office) => {
        const isActive = activeId === office.id;
        return (
          <button
            key={office.id}
            type="button"
            onMouseEnter={() => onHover(office.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onHover(office.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 group z-10"
            style={{ left: `${office.xPct}%`, top: `${office.yPct}%` }}
            aria-label={office.label}
          >
            {/* Pulse ring */}
            {isActive && (
              <span className="absolute inset-0 -m-4 rounded-full bg-[#49A98F]/15 animate-ping pointer-events-none" />
            )}

            {/* Hexagonal pin */}
            <svg
              width={isActive ? 38 : 30}
              height={isActive ? 44 : 34}
              viewBox="0 0 38 44"
              className="transition-all duration-300 drop-shadow-lg"
              style={{ filter: isActive ? "drop-shadow(0 0 6px rgba(73,169,143,0.7))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
            >
              {/* Hexagon shape */}
              <polygon
                points="19,2 36,11 36,29 19,38 2,29 2,11"
                fill={isActive ? "#49A98F" : "#1D2E54"}
                stroke={isActive ? "#79C9A1" : "#3B71B5"}
                strokeWidth="1.5"
              />
              {/* RT text */}
              <text
                x="19"
                y="24"
                textAnchor="middle"
                fill="white"
                fontSize={isActive ? "10" : "8.5"}
                fontWeight="700"
                fontFamily="Inter, sans-serif"
                letterSpacing="0.5"
              >
                RT
              </text>
            </svg>

            {/* Tooltip */}
            <span
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-lg border border-[#2a4a7f] bg-[#0f1f3d] px-2.5 py-1.5 text-left shadow-xl transition-all duration-200 ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <span className="block text-[12px] font-bold text-white leading-tight">
                {office.label}
              </span>
              <span className="block text-[10px] text-[#49A98F]">
                {office.sublabel}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
