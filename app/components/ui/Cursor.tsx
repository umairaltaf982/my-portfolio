"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let mx = -300, my = -300;
    let rx = -300, ry = -300;
    let hovering = false;
    let rafId: number;

    /* ── Tick: dot = instant, ring = lerp ─────────────────── */
    const tick = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        /* Dot tracks pixel-perfectly — no lag at all */
        dot.style.transform = `translate3d(${mx}px,${my}px,0)`;

        /* Ring smoothly follows with a small lerp */
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = `translate3d(${rx}px,${ry}px,0)`;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    /* ── Events ───────────────────────────────────────────── */
    const INTERACTIVE =
      "a,button,[role='button'],input,textarea,select,label,[data-cursor]";

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const onOver = (e: MouseEvent) => {
      const hit = !!(e.target as HTMLElement).closest?.(INTERACTIVE);
      if (hit === hovering) return;
      hovering = hit;
      styleRing();
    };

    const onDown = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;
      dot.style.width  = dot.style.height  = "5px";
      ring.style.width = ring.style.height = "26px";
    };

    const onUp = () => {
      hovering = !!(document.querySelectorAll(INTERACTIVE + ":hover").length);
      styleRing();
      const dot = dotRef.current;
      if (dot) dot.style.width = dot.style.height = hovering ? "9px" : "7px";
    };

    const styleRing = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;
      if (hovering) {
        dot.style.width  = dot.style.height  = "9px";
        ring.style.width = ring.style.height = "50px";
        ring.style.borderColor     = "#0ea5e9";
        ring.style.backgroundColor = "rgba(14,165,233,0.07)";
      } else {
        dot.style.width  = dot.style.height  = "7px";
        ring.style.width = ring.style.height = "36px";
        ring.style.borderColor     = "rgba(14,165,233,0.5)";
        ring.style.backgroundColor = "transparent";
      }
    };

    window.addEventListener("mousemove",  onMove, { passive: true });
    window.addEventListener("mouseover",  onOver, { passive: true });
    window.addEventListener("mousedown",  onDown, { passive: true });
    window.addEventListener("mouseup",    onUp,   { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Ring — CSS handles size/color transitions */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-[9998] rounded-full border top-0 left-0"
        style={{
          width: 36,
          height: 36,
          marginLeft: "-18px",
          marginTop: "-18px",
          borderColor: "rgba(14,165,233,0.5)",
          willChange: "transform",
          transition:
            "width 0.18s cubic-bezier(0.16,1,0.3,1), " +
            "height 0.18s cubic-bezier(0.16,1,0.3,1), " +
            "border-color 0.18s ease, " +
            "background-color 0.18s ease",
        }}
      />

      {/* Dot — instant, only size transitions via CSS */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] rounded-full top-0 left-0"
        style={{
          width: 7,
          height: 7,
          marginLeft: "-3.5px",
          marginTop: "-3.5px",
          backgroundColor: "#0ea5e9",
          willChange: "transform",
          transition: "width 0.15s ease, height 0.15s ease",
        }}
      />
    </>
  );
}
