"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "RantauFlow",
    status: "LIVE",
    category: "Personal Finance",
    description:
      "AI-powered personal finance platform helping overseas workers manage expenses and build better financial habits.",
    button: "Explore Product →",
    url: "https://rantauflow.app",
  },
  {
    title: "CryptoInside",
    status: "LIVE",
    category: "Research Platform",
    description:
      "AI-powered crypto education and market research platform focused on structured learning instead of hype.",
    button: "Explore Product →",
    url: "https://cryptoinside.site",
  },
  {
    title: "Oracle",
    status: "IN DEVELOPMENT",
    category: "AI Intelligence Engine",
    description:
      "Next-generation AI engine designed for market intelligence, automation, and decision support systems.",
    button: "Coming Soon",
    url: "#",
  },
];

export default function ProductGrid() {
  return (
    <section className="relative z-20 mx-auto max-w-7xl px-6 py-32">

      <motion.p
        className="text-xs tracking-[0.5em] text-white/40 mb-8"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        SOFTWARE PRODUCTS
      </motion.p>

      <motion.h2
        className="font-serif text-[2.8rem] sm:text-5xl md:text-6xl leading-[0.95] max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Every product is built as a long-term digital asset, not a one-time project.
      </motion.h2>

      <motion.p
        className="mt-8 max-w-3xl text-lg leading-relaxed text-white/60"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        A-Tech Labs develops software products that become reusable digital
        infrastructure. Every product contributes to a growing ecosystem of
        research, automation, and AI Visibility technologies.
      </motion.p>

      <div className="grid lg:grid-cols-3 gap-8 mt-20">

        {products.map((product, index) => (

          <motion.div
            key={product.title}
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
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.015,
            }}
            className="
            group
            rounded-[34px]
            border
            border-white/10
            bg-white/[0.02]
            backdrop-blur-xl
            p-8
            transition-all
            duration-500
            hover:border-white/20
            hover:bg-white/[0.035]
            "
          >

            <div className="flex items-center justify-between">

              <span className="text-xs tracking-[0.35em] text-white/40 uppercase">
                {product.category}
              </span>

              <span
                className={`text-[11px] tracking-[0.35em] uppercase ${
                  product.status === "LIVE"
                    ? "text-emerald-400"
                    : "text-amber-400"
                }`}
              >
                {product.status}
              </span>

            </div>

            <h3 className="mt-8 font-serif text-4xl text-white group-hover:text-white">
              {product.title}
            </h3>

            <p className="mt-6 leading-8 text-white/60">
              {product.description}
            </p>

            <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-between">

              <span className="text-xs tracking-[0.3em] uppercase text-white/30">
                Product Entity
              </span>

              {product.status === "LIVE" ? (
                <Link
                  href={product.url}
                  target="_blank"
                  className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-3
                  text-xs
                  tracking-[0.3em]
                  uppercase
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  "
                >
                  {product.button}
                </Link>
              ) : (
                <span className="text-xs tracking-[0.3em] uppercase text-white/30">
                  Coming Soon
                </span>
              )}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}