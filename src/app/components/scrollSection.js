"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollSection({ children }) {
  const ref = useRef(null);

  // Tracks the scroll progress of the section relative to viewport
  // - "start end": top of the element enters the bottom of viewport (scrollYProgress = 0)
  // - "end start": bottom of the element leaves the top of viewport (scrollYProgress = 1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Smooth out the progress value using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 18,
    restDelta: 0.001
  });

  // Parallax translation:
  // Enters: slides from 120px to 0px
  // In view: stays at 0px
  // Exits: slides from 0px to -120px
  const y = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [120, 0, 0, -120]);
  
  // Opacity fade:
  // Enters with 0.4, fully fades in to 1 at 25%, starts fading out at 75%, exits at 0.4
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);

  // Scale transition:
  // Enters at 96%, hits 100% in full view, exits shrinking to 96%
  const scale = useTransform(smoothProgress, [0, 0.25, 0.75, 1], [0.96, 1, 1, 0.96]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      <motion.div style={{ y, opacity, scale }} className="w-full origin-center">
        {children}
      </motion.div>
    </div>
  );
}
