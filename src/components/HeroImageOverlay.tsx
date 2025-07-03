// components/GsapFadeOverlay.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function HeroImageOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(overlayRef.current, {
      opacity: 0.2,
      duration: 1.5,
      ease: 'power2.out',
      delay: 2,
    });
  }, []);

  return (
    <div
      ref={overlayRef}
      className="w-full bg-black absolute inset-0 z-20 opacity-100 pointer-events-none"
    ></div>
  );
}
