"use client";

import { motion } from "framer-motion";

export default function Thesis() {
  return (
    <motion.section
  className="relative z-20 px-8 py-32 max-w-7xl mx-auto"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
      <motion.p
  className="text-xs tracking-[0.5em] text-white/50 mb-8"
  initial={{
    opacity: 0,
    x: -40,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  viewport={{ once: false }}
  transition={{
    duration: 0.8,
  }}
>
  THESIS
</motion.p>

      <motion.h2
  className="text-6xl leading-[1] font-serif text-white max-w-6xl overflow-hidden"
  initial={{
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
    filter: "blur(12px)",
  }}
  whileInView={{
    opacity: 1,
    clipPath: "inset(0 0% 0 0)",
    filter: "blur(0px)",
  }}
  viewport={{ once: false }}
  transition={{
    duration: 1.4,
    ease: "easeOut",
  }}
>
        We believe modern leverage comes from intelligent systems,
        productized knowledge, and premium digital infrastructure.
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 mt-32">
        <motion.div
className="
rounded-3xl
border
border-white/10
bg-black/30
backdrop-blur-sm
p-8
hover:border-white/20
hover:bg-white/[0.03]
transition-all
duration-300
"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{
  y: -8,
  scale: 1.02,
}}
viewport={{ once: true }}
transition={{
  duration: 0.25,
}}
>
          <h3 className="text-2xl font-semibold mb-4">Intelligence over noise</h3>
          <p className="text-white/60 text-lg leading-relaxed">
            We build systems that create leverage, not distractions.
          </p>
        </motion.div>

        <motion.div
className="
rounded-3xl
border
border-white/10
bg-black/30
backdrop-blur-sm
p-8
hover:border-white/20
hover:bg-white/[0.03]
transition-all
duration-300
"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{
  y: -8,
  scale: 1.02,
}}
viewport={{ once: true }}
transition={{
  duration: 0.25,
}}
>
  <h3 className="text-2xl font-semibold mb-4">Systems over hustle</h3>

  <p className="text-white/60 text-lg leading-relaxed">
    Execution scales through infrastructure, not chaos.
  </p>
</motion.div>

        <motion.div
className="
rounded-3xl
border
border-white/10
bg-black/30
backdrop-blur-sm
p-8
hover:border-white/20
hover:bg-white/[0.03]
transition-all
duration-300
"
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
whileHover={{
  y: -8,
  scale: 1.02,
}}
viewport={{ once: true }}
transition={{
  duration: 0.25,
}}
>
  <h3 className="text-2xl font-semibold mb-4">Premium execution</h3>

  <p className="text-white/60 text-lg leading-relaxed">
    Design, utility, and experience should feel intentional.
  </p>
</motion.div>
      </div>
    </motion.section>
  );
}