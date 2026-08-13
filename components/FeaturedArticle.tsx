"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FeaturedArticle() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
        "
      >
        <div className="p-12 md:p-16">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.45em] text-emerald-300">
              Featured Research
            </p>

            <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-white/45">
              28 Jul 2026
            </span>
          </div>

          <h2
            className="
              mt-10
              max-w-5xl
              font-serif
              text-[3.5rem]
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              md:text-[5rem]
            "
          >
            Building AI Visibility
            <br />
            Infrastructure.
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-white/60
            "
          >
            Modern software companies should not publish disconnected
            content. Every article, framework, documentation page,
            research paper, and engineering note should strengthen a
            permanent knowledge infrastructure that compounds over time.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Category
              </p>
              <p className="mt-2 text-white/80">AI Visibility</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Reading Time
              </p>
              <p className="mt-2 text-white/80">12 Minutes</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Knowledge Type
              </p>
              <p className="mt-2 text-white/80">Research Paper</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/articles/ai-visibility-infrastructure"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              Read Research
            </Link>

            <Link
              href="/research"
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.02]
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.28em]
                text-white
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.05]
              "
            >
              Research Archive
            </Link>
          </div>
        </div>

        <div className="grid border-t border-white/10 md:grid-cols-3">
          <div className="border-b border-white/10 p-10 md:border-b-0 md:border-r">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Purpose
            </p>
            <h3 className="mt-5 font-serif text-3xl text-white">
              Discoverability
            </h3>
            <p className="mt-5 leading-8 text-white/55">
              Structured research improves discoverability for humans,
              search engines, and modern AI systems.
            </p>
          </div>

          <div className="border-b border-white/10 p-10 md:border-b-0 md:border-r">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Philosophy
            </p>
            <h3 className="mt-5 font-serif text-3xl text-white">
              Knowledge First
            </h3>
            <p className="mt-5 leading-8 text-white/55">
              Research is treated as permanent infrastructure rather
              than temporary marketing content.
            </p>
          </div>

          <div className="p-10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Outcome
            </p>
            <h3 className="mt-5 font-serif text-3xl text-white">
              Entity Authority
            </h3>
            <p className="mt-5 leading-8 text-white/55">
              Every publication compounds long-term authority across the
              entire A-Tech Labs ecosystem.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}