"use client";

import { motion } from "framer-motion";

export default function Thesis() {
  return (
    <motion.section
      className="relative z-20 px-6 md:px-8 py-32 max-w-7xl mx-auto"
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
        COMPANY THESIS
      </motion.p>

      <motion.h2
        className="text-[2.7rem] sm:text-5xl md:text-6xl leading-[0.95] font-serif text-white max-w-6xl"
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
        Modern companies should not sell hours.
        <br />
        They should build systems that
        <br />
        continue creating value.
      </motion.h2>

      <motion.p
        className="mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-white/60"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: false }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
      >
        A-Tech Labs exists to design products, automation systems,
        AI Visibility technologies, and research assets that become
        reusable digital infrastructure instead of one-time services.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-24">

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
          duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] text-white/40 mb-6">
            SOFTWARE PRODUCTS
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Build Once.
            <br />
            Scale Forever.
          </h3>

          <p className="text-white/60 leading-relaxed">
            Every product is built as a long-term digital asset instead of
            a custom project for a single client.
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
          duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] text-white/40 mb-6">
            RESEARCH
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Knowledge
            <br />
            becomes infrastructure.
          </h3>

          <p className="text-white/60 leading-relaxed">
            Research, documentation, case studies, and technical writing are
            treated as permanent company assets.
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
          duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          viewport={{ once: true }}
        >
          <p className="text-xs tracking-[0.3em] text-white/40 mb-6">
            AI VISIBILITY
          </p>

          <h3 className="text-2xl font-semibold mb-4">
            Build for humans.
            <br />
            Be understood by AI.
          </h3>

          <p className="text-white/60 leading-relaxed">
            We engineer structured knowledge that helps products and companies
            become discoverable across modern AI search engines.
          </p>
        </motion.div>

      </div>

      <motion.div
  className="mt-28"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>

  <p className="text-xs tracking-[0.4em] text-white/40 mb-10">
    COMPANY ECOSYSTEM
  </p>

  <div className="rounded-[34px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

    <div className="py-12 border-b border-white/10 text-center">

      <p className="text-white/40 tracking-[0.35em] text-xs mb-3">
        COMPANY
      </p>

      <h3 className="font-serif text-4xl text-white">
        A-Tech Labs
      </h3>

      <p className="mt-4 text-white/50 max-w-xl mx-auto">
        An independent AI product company building software,
        research, and AI Visibility technologies.
      </p>

    </div>

    <div className="grid lg:grid-cols-3">

  {/* SOFTWARE PRODUCTS */}

  <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10">

    <p className="text-xs tracking-[0.3em] text-white/40 mb-8">
      SOFTWARE PRODUCTS
    </p>

    <div className="space-y-5">

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.03)]">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"/>

        <h4 className="relative text-lg font-semibold transition-all duration-500 group-hover:translate-x-1">
          RantauFlow
        </h4>

        <p className="relative mt-2 text-sm text-white/45 transition-all duration-500 group-hover:text-white/70">
          Personal finance platform.
        </p>

        <div className="relative mt-6 text-[11px] tracking-[0.35em] uppercase text-emerald-400/60 transition-all duration-500 group-hover:text-emerald-300">
          Live →
        </div>

      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.03)]">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"/>

        <h4 className="relative text-lg font-semibold transition-all duration-500 group-hover:translate-x-1">
          CryptoInside
        </h4>

        <p className="relative mt-2 text-sm text-white/45 transition-all duration-500 group-hover:text-white/70">
          AI-powered crypto education.
        </p>

        <div className="relative mt-6 text-[11px] tracking-[0.35em] uppercase text-emerald-400/60 transition-all duration-500 group-hover:text-emerald-300">
          Live →
        </div>

      </div>

      <div className="group relative overflow-hidden rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.03)]">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"/>

        <h4 className="relative text-lg font-semibold transition-all duration-500 group-hover:translate-x-1">
          Oracle
        </h4>

        <p className="relative mt-2 text-sm text-white/45 transition-all duration-500 group-hover:text-white/70">
          AI trading intelligence platform.
        </p>

        <div className="relative mt-6 text-[11px] tracking-[0.35em] uppercase text-amber-400/60 transition-all duration-500 group-hover:text-amber-300">
          In Development →
        </div>

      </div>

    </div>

  </div>

  {/* RESEARCH */}

  <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10">

    <p className="text-xs tracking-[0.3em] text-white/40 mb-8">
      RESEARCH
    </p>

    <div className="space-y-5">

      {[
        "Articles",
        "Case Studies",
        "Whitepapers",
      ].map((item) => (
        <div
          key={item}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.03)]"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"/>

          <h4 className="relative font-semibold transition-all duration-500 group-hover:translate-x-1">
            {item}
          </h4>

          <div className="relative mt-5 text-[11px] tracking-[0.35em] uppercase text-sky-400/60 transition-all duration-500 group-hover:text-sky-300">
            Growing →
          </div>

        </div>
      ))}

    </div>

  </div>

  {/* AI VISIBILITY */}

  <div className="p-10">

    <p className="text-xs tracking-[0.3em] text-white/40 mb-8">
      AI VISIBILITY
    </p>

    <div className="space-y-5">

      {[
        "Generative Engine Optimization (GEO)",
        "Entity Authority",
        "Knowledge Graph",
      ].map((item) => (
        <div
          key={item}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.015] p-5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] hover:shadow-[0_0_45px_rgba(255,255,255,0.03)]"
        >

          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none"/>

          <h4 className="relative font-semibold transition-all duration-500 group-hover:translate-x-1">
            {item}
          </h4>

          <div className="relative mt-5 text-[11px] tracking-[0.35em] uppercase text-violet-400/60 transition-all duration-500 group-hover:text-violet-300">
            Core Technology →
          </div>

        </div>
      ))}

    </div>

  </div>

</div>

  </div>

</motion.div>
    </motion.section>
  );
}