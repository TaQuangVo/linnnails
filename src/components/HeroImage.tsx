"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
      const updateSize = () => setIsMobile(window.innerWidth < 768);
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    const src = isMobile ? "/hero-horizontal.png" : "/hero.png";

    return (
        <Image
        src={src}
        alt="Hero Image"
        fill
        style={{
          objectFit: "cover",
        }}
        className="relative z-10"
        priority
      />
    )
}