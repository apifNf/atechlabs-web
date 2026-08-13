"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Systems Thinking",
    description:
      "Modern software companies should build systems that continue creating value over time.",
    href: "/articles",
  },
  {
    title: "AI Visibility",
    description:
      "Research structured for both humans and AI search engines becomes a long-term competitive advantage.",
    href: "/research",
  },
  {
    title: "Automation",
    description:
      "Automation is not replacing people. It removes repetitive work so people can focus on leverage.",
    href: "/products",
  },
  {
    title: "Knowledge Assets",
    description:
      "Documentation, articles, and frameworks are permanent company assets rather than disposable content.",
    href: "/whitepapers",
  },
];

export default function ArticlesHero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 pt-40 pb-28">
      {/* SECTION 1: HERO TITLE & DESC */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/35">
          Knowledge Journal
        </p>

        <h1
          className="
          mt-8
          max-w-5xl
          font-serif
          text-[4rem]
          leading-[0.93]
          tracking-[-0.04em]
          text-white
          md:text-[5.7rem]
        "
        >
          Every article
          <br />
          should increase
          <br />
          company intelligence.
        </h1>

        <p
          className="
          mt-10
          max-w-3xl
          text-xl
          leading-10
          text-white/60
        "
        >
          A-Tech Labs publishes long-form research, engineering insights,
          documentation, and strategic thinking designed to become reusable
          knowledge assets instead of temporary content.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <Link
            href="/research"
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
            Explore Research
          </Link>

          <Link
            href="/whitepapers"
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
            Whitepapers
          </Link>
        </div>
      </motion.div>

      {/* SECTION 2: STATS */}
      <motion.div
        className="mt-24 grid gap-6 lg:grid-cols-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Published
          </p>

          <h3 className="mt-5 font-serif text-5xl">0</h3>

          <p className="mt-5 text-white/50 leading-7">
            Long-form technical articles published.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Topics
          </p>

          <h3 className="mt-5 font-serif text-5xl">4</h3>

          <p className="mt-5 text-white/50 leading-7">
            Systems, AI, Automation, and Infrastructure.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Status
          </p>

          <h3 className="mt-5 font-serif text-4xl text-emerald-300">Growing</h3>

          <p className="mt-5 text-white/50 leading-7">
            New knowledge assets will be published continuously.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
            Purpose
          </p>

          <h3 className="mt-5 font-serif text-3xl">
            Build
            <br />
            Entity
          </h3>

          <p className="mt-5 text-white/50 leading-7">
            Every publication strengthens long-term knowledge authority.
          </p>
        </div>
      </motion.div>

      {/* SECTION 3: KNOWLEDGE TOPICS */}
      <motion.div
        className="mt-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-white/35">
          Knowledge Topics
        </p>

        {/* ERROR FIX: The empty <div> is now wrapping the map function correctly */}
        <div className="grid gap-6 lg:grid-cols-2">
          {categories.map((item, index) => (
            <motion.div
              key={item.title}
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
                delay: index * 0.12,
                duration: 0.6,
              }}
            >
              <Link
                href={item.href}
                className="
                group
                block
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.02]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.04]
                "
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                    Topic
                  </p>

                  <span className="text-white/25 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-[2rem] leading-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-white/55">
                  {item.description}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                    Knowledge Topic
                  </span>

                  <span className="text-xs uppercase tracking-[0.2em] text-white transition group-hover:translate-x-1">
                    Explore
                  </span>
                </div>
              </Link>
            </motion.div> /* ERROR FIX: Added missing </motion.div> here */
          ))} {/* ERROR FIX: Added missing ))} here */}
        </div>
      </motion.div> {/* ERROR FIX: Added missing </motion.div> here */}

      {/* SECTION 4: EDITORIAL PHILOSOPHY */}
      <motion.div
        className="mt-28 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent backdrop-blur-xl"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
      >
        <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
          <div className="border-b border-white/10 p-12 lg:border-b-0 lg:border-r">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Editorial Philosophy
            </p>

            <h2 className="mt-8 font-serif text-5xl leading-tight text-white">
              We don't publish
              <br />
              for algorithms.
              <br />
              We publish
              <br />
              for permanence.
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-white/55">
              Every article is written to remain useful years after publication.
              Rather than chasing trends, we focus on timeless ideas, practical
              engineering, AI product development, automation systems, and
              knowledge that compounds over time.
            </p>
          </div>

          <div className="p-12">
            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35">
              Writing Principles
            </p>

            <div className="mt-10 space-y-6">
              {[
                "Systems over shortcuts",
                "Depth over virality",
                "Evidence over opinions",
                "Build in public",
                "Knowledge compounds",
              ].map((item) => (
                <div
                  key={item}
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-6
                  py-5
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/[0.04]
                  "
                >
                  <span className="text-white/80">{item}</span>

                  <span className="text-white/25">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}