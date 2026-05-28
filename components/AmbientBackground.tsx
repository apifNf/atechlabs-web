"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientBackground() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 2000], [0, 250]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -180]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* base */}
      <div className="absolute inset-0 bg-black" />

      {/* giant purple glow */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: [0, 140, -70, 0],
          scale: [1, 1.18, 0.92, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-10%]
          right-[-15%]
          w-[900px]
          h-[1200px]
          rounded-full
          bg-violet-700/20
          blur-[180px]
        "
      />

      {/* blue beam */}
      <motion.div
        style={{ y: y2 }}
        animate={{
          x: [0, -120, 60, 0],
          scaleY: [1, 1.35, 0.82, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[5%]
          right-[8%]
          w-[260px]
          h-[900px]
          rounded-full
          bg-cyan-300/30
          blur-[140px]
        "
      />

      {/* secondary purple */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          opacity: [0.3, 0.5, 0.25, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-10%]
          right-[10%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-fuchsia-500/10
          blur-[140px]
        "
      />

      {/* dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/10" />

      {/* subtle grain */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}