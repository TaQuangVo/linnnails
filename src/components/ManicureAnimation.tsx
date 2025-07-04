"use client"

import Player from "lottie-react";
import data from './icons/Pedicure.json'
import { useEffect, useRef } from "react";
import { gsap } from 'gsap';

const ManicureAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(ref.current, {
      opacity: 0.0,
      duration: 1.5,
      ease: 'power2.out',
      delay: 3.0,
    });
  }, []);

  return (
    <div ref={ref} className="w-30 h-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-90">
      <Player
        autoplay
        loop
        style={{ height: "100%", width: "100%" }} 
        animationData={data}      
        />
    </div>
  );
};

export default ManicureAnimation;