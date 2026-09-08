"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // 1. Turn off browser's automatic memory-based scroll restoration
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Instantly force top before paint
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 3. Failsafe after layout stabilization
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}