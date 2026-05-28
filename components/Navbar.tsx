"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="A-Tech Labs"
            width={180}
            height={50}
            priority
            className="h-auto w-[150px] md:w-[180px]"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <Link href="/" className="text-sm uppercase tracking-[0.25em] text-white/75 transition hover:text-white">
            Vision
          </Link>

          <Link href="/products" className="text-sm uppercase tracking-[0.25em] text-white/75 transition hover:text-white">
            Products
          </Link>

          <Link href="/contact" className="text-sm uppercase tracking-[0.25em] text-white/75 transition hover:text-white">
            Contact
          </Link>
        </div>

        <Link
          href="/products"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
        >
          Access Products
        </Link>
      </div>
    </motion.nav>
  );
}