"use client";

import { motion } from "framer-motion";

export default function ResearchHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-8 pt-40 pb-24">

      <motion.p
        className="text-xs tracking-[0.5em] uppercase text-white/40"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Research Infrastructure
      </motion.p>

      <motion.h1
        className="mt-8 max-w-6xl font-serif text-[3rem] leading-[0.95] text-white sm:text-6xl md:text-7xl"
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(12px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
        }}
      >
        Research is not content.
        <br />
        It is permanent
        <br />
        company infrastructure.
      </motion.h1>

      <motion.p
        className="mt-10 max-w-4xl text-lg leading-9 text-white/60"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        Every article, framework, case study, documentation,
        and whitepaper published by A-Tech Labs is treated as
        reusable digital infrastructure designed for humans,
        search engines, and modern AI systems.
      </motion.p>

      <motion.div
        className="mt-20 grid gap-6 md:grid-cols-4"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
      >
        {[
          {
            title: "Articles",
            value: "Knowledge",
          },
          {
            title: "Case Studies",
            value: "Execution",
          },
          {
            title: "Whitepapers",
            value: "Research",
          },
          {
            title: "AI Visibility",
            value: "Entity Authority",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-white/20
              hover:bg-white/[0.04]
            "
          >
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              {item.title}
            </p>

            <h3 className="mt-5 font-serif text-3xl text-white">
              {item.value}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
}