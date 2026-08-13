"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ecosystem = [
  {
    title: "Research",
    description:
      "Articles, whitepapers, and case studies create permanent company knowledge.",
    href: "/research",
  },
  {
    title: "Products",
    description:
      "Research evolves into software, AI products, and reusable digital infrastructure.",
    href: "/products",
  },
  {
    title: "AI Visibility",
    description:
      "Structured knowledge improves discoverability across AI search engines.",
    href: "/about",
  },
];

export default function KnowledgeInfrastructure() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-32">

      <motion.p
        className="text-xs uppercase tracking-[0.5em] text-white/35"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Knowledge Infrastructure
      </motion.p>

      <motion.h2
        className="mt-8 max-w-6xl font-serif text-[2.8rem] leading-[0.95] text-white sm:text-5xl md:text-6xl"
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
        Knowledge compounds
        <br />
        when every system
        <br />
        strengthens another.
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
      >
        Our research is not isolated from our products.
        Every document contributes to software development,
        every product generates new knowledge, and every
        knowledge asset improves long-term AI Visibility.
      </motion.p>

      <motion.div
        className="mt-24 rounded-[36px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
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

        <div className="border-b border-white/10 p-12 text-center">

          <p className="text-xs uppercase tracking-[0.4em] text-white/35">
            A-Tech Labs Knowledge Engine
          </p>

          <h3 className="mt-5 font-serif text-5xl text-white">
            Research → Products → AI Visibility
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-white/55 leading-8">
            A continuous knowledge cycle where research creates
            products, products generate experience, and experience
            produces stronger research.
          </p>

        </div>

        <div className="grid lg:grid-cols-3">

          {ecosystem.map((item, index) => (

            <Link
              key={item.title}
              href={item.href}
              className={`
                group
                relative
                p-10
                transition-all
                duration-500
                hover:bg-white/[0.03]
                hover:-translate-y-1
                ${
                  index !== ecosystem.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-white/10"
                    : ""
                }
              `}
            >

              <div className="flex items-center justify-between">

                <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                  Layer 0{index + 1}
                </p>

                <span className="text-white/25 text-xl">
                  →
                </span>

              </div>

              <h3 className="mt-8 font-serif text-4xl text-white">
                {item.title}
              </h3>

              <p className="mt-6 leading-8 text-white/55">
                {item.description}
              </p>

              <div className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between">

                <span className="uppercase tracking-[0.3em] text-xs text-white/35">
                  Internal Entity
                </span>

                <span className="uppercase tracking-[0.2em] text-sm text-white transition group-hover:translate-x-1">
                  Open →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </motion.div>

      <motion.div
        className="mt-20 rounded-[32px] border border-emerald-400/15 bg-emerald-400/[0.03] p-10"
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >

        <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">
          Long-Term Strategy
        </p>

        <h3 className="mt-5 font-serif text-4xl text-white">
          We don't measure content.
          <br />
          We measure accumulated knowledge.
        </h3>

        <p className="mt-6 max-w-4xl leading-8 text-white/60">
          Every new article, research paper, software release,
          documentation update, and case study strengthens the
          entire ecosystem. The value of the knowledge base grows
          exponentially because every new asset is connected to
          every previous asset.
        </p>

      </motion.div>

    </section>
  );
}