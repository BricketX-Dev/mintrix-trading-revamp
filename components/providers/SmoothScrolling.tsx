"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis instance once
  useEffect(() => {
    // Disable browser default memory restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const lenis = new Lenis({
      lerp: 0.07,
      duration: 1.2,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // 2. Reset Lenis scroll on EVERY route change
  useEffect(() => {
    if (lenisRef.current) {
      // Instantly jump Lenis internal coordinates to top without smooth animation
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    // Native browser fallback
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Failsafe execution after layout paints
    const timer = setTimeout(() => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}