"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Articles",
    title: "Ideas become structured knowledge.",
    description:
      "Technical articles, tutorials, engineering insights, AI workflows, and long-form educational content designed for humans and AI systems.",
    href: "/articles",
    status: "Growing",
  },
  {
    label: "Case Studies",
    title: "Real execution. Real systems.",
    description:
      "Documentation of product development, automation systems, business experiments, architecture decisions, and implementation journeys.",
    href: "/case-studies",
    status: "Growing",
  },
  {
    label: "Whitepapers",
    title: "Long-term research assets.",
    description:
      "Deep research, strategic frameworks, technical documentation, market analysis, and permanent knowledge assets.",
    href: "/whitepapers",
    status: "Growing",
  },
];

export default function ResearchCategories() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 md:px-8 py-32">

      <motion.p
        className="text-xs uppercase tracking-[0.5em] text-white/35"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Research Categories
      </motion.p>

      <motion.h2
        className="mt-8 max-w-5xl font-serif text-[2.8rem] leading-[0.95] text-white sm:text-5xl md:text-6xl"
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
        Every piece of research
        <br />
        belongs to a permanent
        <br />
        knowledge system.
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
        Rather than publishing disconnected content, every research asset
        contributes to a structured ecosystem that continuously strengthens
        products, documentation, discoverability, and long-term intellectual
        property.
      </motion.p>

      <div className="mt-24 grid gap-8 lg:grid-cols-3">

        {categories.map((item, index) => (

          <motion.div
            key={item.title}
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
              delay: index * .15,
              duration: .7,
            }}
          >

            <Link
              href={item.href}
              className="
              group
              block
              h-full
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.02]
              backdrop-blur-xl
              p-10
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-white/20
              hover:bg-white/[0.04]
              "
            >

              <div className="flex items-center justify-between">

                <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                  {item.label}
                </p>

                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-300">
                  {item.status}
                </span>

              </div>

              <h3 className="mt-8 font-serif text-4xl leading-tight text-white transition group-hover:text-white">
                {item.title}
              </h3>

              <p className="mt-8 leading-8 text-white/55">
                {item.description}
              </p>

              <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">

                <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Knowledge Category
                </span>

                <span className="text-sm tracking-[0.2em] uppercase text-white group-hover:translate-x-1 transition">
                  Explore →
                </span>

              </div>

            </Link>

          </motion.div>

        ))}

      </div>

    </section>
  );
}