"use client";

import { useState, useEffect } from "react";

export function Preloader() {
  const [phase, setPhase] = useState<"animate" | "exit" | "done">("animate");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("rts_preloader_shown")) {
        setPhase("done");
        return;
      }
    } catch {
      /* SSR / privacy mode */
    }

    document.body.style.overflow = "hidden";

    const exitTimer = setTimeout(() => setPhase("exit"), 3000);
    const removeTimer = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("rts_preloader_shown", "1");
      } catch { }
    }, 3800);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <>
      <style>{`
        @keyframes pl-fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pl-boxWipe {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        @keyframes pl-slideUp {
          to { transform: translateY(-100vh); }
        }
        @keyframes pl-wave {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pl-ripple {
          0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.12; }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0; }
        }
        @keyframes pl-compassSpin {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }
        @keyframes pl-accentGrow {
          from { width: 0; opacity: 0; }
          to   { width: 60px; opacity: 1; }
        }

        .pl-root {
          position: fixed; inset: 0; z-index: 99999;
          display: flex; align-items: center; justify-content: center; flex-direction: column;
          background: radial-gradient(ellipse at 50% 40%, #243a65 0%, #1D2E54 50%, #141f3a 100%);
          overflow: hidden;
          font-family: var(--font-inter), 'Inter', sans-serif;
        }
        .pl-root--exit {
          animation: pl-slideUp 0.8s cubic-bezier(0.76,0,0.24,1) forwards;
        }

        /* Ripple rings */
        .pl-ripple {
          position: absolute; top: 50%; left: 50%;
          width: 700px; height: 700px; border-radius: 50%;
          border: 1px solid rgba(73,169,143,0.08);
          animation: pl-ripple 5s ease-out infinite;
          pointer-events: none;
        }
        .pl-ripple:nth-child(2) { animation-delay: 1.25s; width: 500px; height: 500px; }
        .pl-ripple:nth-child(3) { animation-delay: 2.5s;  width: 600px; height: 600px; }
        .pl-ripple:nth-child(4) { animation-delay: 3.75s; width: 400px; height: 400px; }

        /* Compass rose */
        .pl-compass {
          position: absolute; top: 50%; left: 50%; width: 480px; height: 480px;
          opacity: 0.025;
          animation: pl-compassSpin 40s linear infinite;
          pointer-events: none;
        }

        /* Bottom gradient overlay */
        .pl-grad {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(29,46,84,0) 0%,
            rgba(29,46,84,0.2) 60%,
            rgba(20,31,58,0.7) 100%);
          pointer-events: none;
        }

        /* Waves */
        .pl-waves {
          position: absolute; bottom: 0; left: 0; width: 100%; height: 35%;
          overflow: hidden; pointer-events: none;
        }
        .pl-wsvg {
          position: absolute; bottom: 0; left: 0;
          width: 200%; min-width: 2880px;
          will-change: transform;
        }
        .pl-wsvg--1 { animation: pl-wave 8s  linear infinite;         opacity: 0.08; }
        .pl-wsvg--2 { animation: pl-wave 12s linear infinite reverse; opacity: 0.05; bottom: 8px; }
        .pl-wsvg--3 { animation: pl-wave 6s  linear infinite;         opacity: 0.03; bottom: 18px; }

        /* Text */
        .pl-text { position: relative; z-index: 2; text-align: center; line-height: 1.1; }
        .pl-line {
          opacity: 0;
          animation: pl-fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .pl-line--1 { animation-delay: 0.3s; }
        .pl-line--2 { animation-delay: 0.6s; }
        .pl-line--3 { animation-delay: 0.9s; }

        .pl-accent {
          height: 2px; margin: 1.4rem auto;
          background: linear-gradient(90deg, transparent, #49A98F, transparent);
          animation: pl-accentGrow 0.5s ease forwards;
          animation-delay: 1.3s;
          width: 0; opacity: 0;
        }

        .pl-domain {
          opacity: 0;
          animation: pl-fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
          animation-delay: 1.5s;
        }
        .pl-domain-inner {
          display: inline-block;
          clip-path: inset(0 100% 0 0);
          animation: pl-boxWipe 0.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
          animation-delay: 1.6s;
        }
      `}</style>

      <div
        className={`pl-root ${phase === "exit" ? "pl-root--exit" : ""}`}
        role="status"
        aria-label="Loading River Tyne Ltd"
      >
        {/* Ripples */}
        <div className="pl-ripple" />
        <div className="pl-ripple" />
        <div className="pl-ripple" />
        <div className="pl-ripple" />

        {/* Compass rose */}
        <svg
          className="pl-compass"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="95" stroke="rgba(255,255,255,.5)" strokeWidth=".5" />
          <circle cx="100" cy="100" r="70" stroke="rgba(255,255,255,.3)" strokeWidth=".5" />
          <circle cx="100" cy="100" r="45" stroke="rgba(255,255,255,.2)" strokeWidth=".5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(255,255,255,.3)" strokeWidth=".5" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(255,255,255,.3)" strokeWidth=".5" />
          <line x1="25" y1="25" x2="175" y2="175" stroke="rgba(255,255,255,.15)" strokeWidth=".5" />
          <line x1="175" y1="25" x2="25" y2="175" stroke="rgba(255,255,255,.15)" strokeWidth=".5" />
          <polygon points="100,5 95,25 105,25" fill="rgba(73,169,143,.4)" />
          <polygon points="100,195 95,175 105,175" fill="rgba(255,255,255,.2)" />
          <polygon points="5,100 25,95 25,105" fill="rgba(255,255,255,.2)" />
          <polygon points="195,100 175,95 175,105" fill="rgba(255,255,255,.2)" />
        </svg>

        <div className="pl-grad" />

        {/* Waves */}
        <div className="pl-waves">
          <svg className="pl-wsvg pl-wsvg--1" viewBox="0 0 2880 320" preserveAspectRatio="none">
            <path
              d="M0,160 C240,100 480,220 720,160 C960,100 1200,220 1440,160 C1680,100 1920,220 2160,160 C2400,100 2640,220 2880,160 L2880,320 L0,320Z"
              fill="#49A98F"
            />
          </svg>
          <svg className="pl-wsvg pl-wsvg--2" viewBox="0 0 2880 320" preserveAspectRatio="none">
            <path
              d="M0,200 C320,140 640,260 960,200 C1280,140 1600,260 1920,200 C2240,140 2560,260 2880,200 L2880,320 L0,320Z"
              fill="#3B71B5"
            />
          </svg>
          <svg className="pl-wsvg pl-wsvg--3" viewBox="0 0 2880 320" preserveAspectRatio="none">
            <path
              d="M0,240 C180,200 360,280 540,240 C720,200 900,280 1080,240 C1260,200 1440,280 1620,240 C1800,200 1980,280 2160,240 C2340,200 2520,280 2700,240 L2880,240 L2880,320 L0,320Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Text */}
        <div className="pl-text">
          <div
            className="pl-line pl-line--1"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "white",
              letterSpacing: "0.12em",
            }}
          >
            Let&apos;s
          </div>
          <div
            className="pl-line pl-line--2"
            style={{
              fontSize: "clamp(3rem, 8vw, 5.5rem)",
              fontWeight: 700,
              color: "#49A98F",
              letterSpacing: "0.04em",
            }}
          >
            Go
          </div>
          <div
            className="pl-line pl-line--3"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "white",
              letterSpacing: "0.12em",
            }}
          >
            Together
          </div>

          <div className="pl-accent" />

          <div className="pl-domain">
            <span
              className="pl-domain-inner"
              style={{
                fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
                fontWeight: 400,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              rivertyneltd.com
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
