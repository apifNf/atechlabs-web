"use client";

import { motion } from "framer-motion";

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* main beam */}
      <motion.div
        animate={{
          x: [0, 12, -8, 0],
          y: [0, -8, 10, 0],
          opacity: [0.5, 0.75, 0.6, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[12%] top-[-10%] h-[140vh] w-[320px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(120,150,255,0.08) 0%, rgba(80,70,255,0.12) 45%, rgba(130,70,255,0.08) 75%, transparent 100%)",
          filter: "blur(90px)",
          transform: "rotate(4deg)",
        }}
      />

      {/* secondary glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.3, 0.2, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[18%] top-[5%] h-[120vh] w-[180px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(180,120,255,0.12), transparent)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}