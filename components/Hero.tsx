"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-20 px-6 md:px-8 pt-40 md:pt-56 pb-24 max-w-7xl mx-auto">
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
    duration: 1,
    ease: "easeOut",
  }}
>
  A-TECH LABS
</motion.p>

      <motion.h1
  className="text-[3.3rem] sm:text-6xl md:text-7xl leading-[0.9] font-serif text-white max-w-5xl"
  initial={{
    opacity: 0,
    x: -100,
    filter: "blur(15px)",
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  viewport={{ once: false }}
  transition={{
    duration: 1.4,
    ease: "easeOut",
  }}
>
  Building intelligent digital products for the modern internet.
</motion.h1>

      <motion.p
  className="mt-8 text-base sm:text-lg md:text-2xl text-white/70 max-w-2xl"
  initial={{
    opacity: 0,
    x: -70,
    filter: "blur(10px)",
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  }}
  viewport={{ once: false }}
  transition={{
    duration: 1.2,
    delay: 0.15,
    ease: "easeOut",
  }}
>
  A-Tech Labs is an independent digital innovation house creating premium
  AI-powered digital products and systems.
</motion.p>

      <motion.div
  className="flex flex-col sm:flex-row gap-4 mt-10"
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: false }}
  transition={{
    duration: 1,
    delay: 0.3,
  }}
>
        <Link
          href="/products"
          className="px-8 py-4 rounded-full bg-white text-black tracking-[0.2em] text-sm hover:opacity-90 transition"
        >
          ACCESS PRODUCTS
        </Link>

        <Link
          href="/about"
          className="px-8 py-4 rounded-full border border-white/20 text-white tracking-[0.2em] text-sm hover:bg-white/5 transition"
        >
          ABOUT A-TECH LABS
        </Link>
      </motion.div>
    </section>
  );
}