"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "Company",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Research",
    href: "/research",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
      fixed
      top-0
      left-0
      z-50
      w-full
      border-b
      border-white/10
      bg-black/40
      backdrop-blur-2xl
      supports-[backdrop-filter]:bg-black/30
      "
    >
      <div
        className="
        mx-auto
        flex
        h-[78px]
        max-w-7xl
        items-center
        justify-between
        px-6
        md:px-8
        "
      >
        {/* Logo */}

        <Link
  href="/"
  className="group flex flex-col leading-none transition-opacity duration-300 hover:opacity-90"
>
  <span
    className="
    font-semibold
    text-[20px]
    tracking-[-0.03em]
    text-white
    "
  >
    A-Tech Labs
  </span>

  <span
    className="
    mt-1
    text-[10px]
    uppercase
    tracking-[0.28em]
    text-white/40
    transition-colors
    duration-300
    group-hover:text-white/60
    "
  >
    Independent AI Product Company
  </span>
</Link>

        {/* Navigation */}

        <div
          className="
          hidden
          items-center
          gap-12
          lg:flex
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              relative
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-white/60
              transition-all
              duration-300
              hover:text-white
              after:absolute
              after:left-0
              after:-bottom-2
              after:h-px
              after:w-0
              after:bg-white
              after:transition-all
              after:duration-300
              hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}

        <Link
          href="/products"
          className="
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-6
          py-2.5
          text-[11px]
          uppercase
          tracking-[0.3em]
          text-white
          transition-all
          duration-300
          hover:-translate-y-[1px]
          hover:border-white/20
          hover:bg-white
          hover:text-black
          "
        >
          Explore Products
        </Link>
      </div>
    </motion.nav>
  );
}