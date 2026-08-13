"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const articles = [
  {
    title: "Building AI Visibility Infrastructure",
    description:
      "Why software companies should build discoverable knowledge systems instead of publishing disconnected content.",
    date: "28 Jul 2026",
    read: "12 min read",
    href: "/articles/ai-visibility-infrastructure",
    featured: true,
  },

  {
    title: "Automation isn't replacing people.",
    description:
      "Automation removes repetitive work so humans can focus on higher-value decisions.",
    date: "20 Jul 2026",
    read: "8 min",
    href: "/articles/automation",
  },

  {
    title: "Knowledge compounds over time.",
    description:
      "Why documentation becomes intellectual capital instead of operating expense.",
    date: "15 Jul 2026",
    read: "14 min",
    href: "/articles/knowledge-compounds",
  },

  {
    title: "Systems Thinking for Modern Builders",
    description:
      "Building products that improve themselves through interconnected systems.",
    date: "10 Jul 2026",
    read: "11 min",
    href: "/articles/systems-thinking",
  },

  {
    title: "Documentation is Leverage",
    description:
      "Every document should increase company intelligence instead of disappearing after publishing.",
    date: "03 Jul 2026",
    read: "9 min",
    href: "/articles/documentation-leverage",
  },

  {
    title: "Why AI-first companies win",
    description:
      "Knowledge systems create compounding advantages for modern businesses.",
    date: "26 Jun 2026",
    read: "17 min",
    href: "/articles/ai-first",
  },
];

export default function ArticlesGrid() { 
      return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[11px] uppercase tracking-[0.45em] text-white/35">
          Research Archive
        </p>

        <h2
          className="
            mt-5
            max-w-4xl
            font-serif
            text-[4rem]
            leading-[0.94]
            tracking-[-0.04em]
            text-white
            md:text-[5.5rem]
          "
        >
          Knowledge only becomes valuable
          <br />
          when it is reusable.
        </h2>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-white/55">
          Every article published by A-Tech Labs is treated as a reusable
          knowledge asset that strengthens products, research, AI Visibility,
          and long-term intellectual capital.
        </p>
      </motion.div>

      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="
                group
                block
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.02]
                p-10
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-white/20
                hover:bg-white/[0.04]
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.35em] text-emerald-300">
                  Featured Research
                </span>

                <span className="text-white/30 transition duration-300 group-hover:text-white">
                  →
                </span>
              </div>

              <h3 className="mt-8 max-w-4xl font-serif text-5xl leading-tight text-white">
                {article.title}
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">
                {article.description}
              </p>

              <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6">
                <span className="text-sm uppercase tracking-[0.3em] text-white/35">
                  {article.date}
                </span>

                <span className="text-sm uppercase tracking-[0.3em] text-white/35">
                  {article.read}
                </span>
              </div>
            </Link>
          ))}
      </motion.div>
            <motion.div
        className="mt-14 grid gap-8 lg:grid-cols-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {articles
          .filter((article) => !article.featured)
          .map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
            >
              <Link
                href={article.href}
                className="
                  group
                  block
                  h-full
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-white/20
                  hover:bg-white/[0.04]
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-white/35">
                    Research Article
                  </span>

                  <span className="text-white/25 transition duration-300 group-hover:text-white">
                    →
                  </span>
                </div>

                <h3 className="mt-8 font-serif text-[2rem] leading-tight text-white">
                  {article.title}
                </h3>

                <p className="mt-5 leading-8 text-white/55">
                  {article.description}
                </p>

                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                      Published
                    </p>

                    <p className="mt-2 text-white/70">
                      {article.date}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                      Reading
                    </p>

                    <p className="mt-2 text-white/70">
                      {article.read}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
      </motion.div>
            <motion.div
        className="mt-28"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="
            rounded-[40px]
            border
            border-emerald-400/20
            bg-gradient-to-r
            from-emerald-500/[0.05]
            via-transparent
            to-blue-500/[0.05]
            p-12
            backdrop-blur-xl
          "
        >
          <p className="text-[11px] uppercase tracking-[0.45em] text-emerald-300">
            Knowledge Manifesto
          </p>

          <h2 className="mt-6 max-w-5xl font-serif text-5xl leading-tight text-white">
            We don't publish articles
            <br />
            to chase traffic.
          </h2>

          <h2 className="mt-2 max-w-5xl font-serif text-5xl leading-tight text-white/90">
            We publish infrastructure
            <br />
            that compounds forever.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-white/60">
            Every article, framework, engineering note, research paper,
            documentation update, and case study strengthens the entire
            A-Tech Labs ecosystem. Knowledge is treated as an appreciating
            company asset rather than temporary marketing content.
          </p>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Purpose
              </p>

              <h3 className="mt-4 font-serif text-3xl text-white">
                Educate
              </h3>

              <p className="mt-4 leading-8 text-white/55">
                Share reusable knowledge for builders, founders,
                developers, and AI-native companies.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Strategy
              </p>

              <h3 className="mt-4 font-serif text-3xl text-white">
                Compound
              </h3>

              <p className="mt-4 leading-8 text-white/55">
                Every publication becomes part of a permanent,
                interconnected knowledge system.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Outcome
              </p>

              <h3 className="mt-4 font-serif text-3xl text-white">
                Discoverability
              </h3>

              <p className="mt-4 leading-8 text-white/55">
                Better documentation creates stronger Entity Authority,
                AI Visibility, and long-term brand trust.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}