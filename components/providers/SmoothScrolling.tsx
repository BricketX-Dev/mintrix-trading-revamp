"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.2,
        smoothWheel: true,
      }}
    >
      {/* Bypass the React 18 vs React 19 type mismatch */}
      {children as any}
    </ReactLenis>
  );
}