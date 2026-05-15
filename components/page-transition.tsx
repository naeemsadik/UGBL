"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

/* ═══════════════════════════════════════════════════════
   PAGE TRANSITION — Simple fade-in from right
   ─────────────────────────────────────────────────────
   No content swapping, no phases. Just:
   1. Next.js swaps the content naturally on route change
   2. We detect the change and play a CSS entrance animation
   3. Done.
   ═══════════════════════════════════════════════════════ */

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animating, setAnimating] = useState(false);
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (pathname !== prevPath.current) {
      prevPath.current = pathname;
      window.scrollTo({ top: 0, behavior: "instant" });
      setAnimating(true);
      const t = setTimeout(() => setAnimating(false), 800);
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <>
      <style>{`
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .page-enter {
          animation: pageEnter 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
      <div className={animating ? "page-enter" : ""}>
        {children}
      </div>
    </>
  );
}
