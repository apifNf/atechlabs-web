"use client";

import { motion } from "framer-motion";

export default function ResearchPhilosophy() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-32">

      <motion.p
        className="text-xs uppercase tracking-[0.5em] text-white/35"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Research Philosophy
      </motion.p>

      <motion.h2
        className="mt-8 max-w-6xl font-serif text-[2.8rem] leading-[0.95] text-white sm:text-5xl md:text-6xl"
        initial={{
          opacity: 0,
          y: 40,
          filter: "blur(10px)",
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
        Every document should
        <br />
        increase company intelligence,
        <br />
        not disappear after publishing.
      </motion.h2>

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
          delay: .2,
          duration: .8,
        }}
      >
        Most companies treat documentation as marketing.
        We treat documentation as infrastructure.
        Every article, framework, case study, and technical paper
        becomes part of an interconnected knowledge system that
        strengthens products, improves discoverability, and
        compounds long-term intellectual capital.
      </motion.p>

      <motion.div
        className="mt-24 rounded-[34px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >

        <div className="grid lg:grid-cols-2">

          <div className="p-12 border-b lg:border-b-0 lg:border-r border-white/10">

            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Traditional Approach
            </p>

            <ul className="mt-10 space-y-6 text-white/55">

              <li>• Publish content for temporary traffic.</li>

              <li>• Knowledge scattered across platforms.</li>

              <li>• SEO focused only on rankings.</li>

              <li>• Research forgotten after publishing.</li>

              <li>• Every article works independently.</li>

            </ul>

          </div>

          <div className="p-12">

            <p className="text-xs uppercase tracking-[0.35em] text-emerald-300/80">
              A-Tech Labs Approach
            </p>

            <ul className="mt-10 space-y-6 text-white">

              <li>• Research becomes permanent infrastructure.</li>

              <li>• Every document connects to another.</li>

              <li>• Structured for Humans + AI.</li>

              <li>• Entity Authority compounds over time.</li>

              <li>• Knowledge continuously increases company value.</li>

            </ul>

          </div>

        </div>

      </motion.div>

    </section>
  );
}