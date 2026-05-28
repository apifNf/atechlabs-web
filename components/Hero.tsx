import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative z-20 px-8 pt-56 pb-24 max-w-7xl mx-auto">
      <p className="text-xs tracking-[0.5em] text-white/50 mb-8">
        A-TECH LABS
      </p>

      <h1 className="text-7xl leading-[0.95] font-serif text-white max-w-4xl">
        Building intelligent digital products for the modern internet.
      </h1>

      <p className="mt-10 text-2xl text-white/70 max-w-3xl">
        A-Tech Labs is an independent digital innovation house creating premium
        AI-powered digital products and systems.
      </p>

      <div className="flex gap-4 mt-10">
        <Link
          href="/products"
          className="px-8 py-4 rounded-full bg-white text-black tracking-[0.2em] text-sm hover:opacity-90 transition"
        >
          ACCESS PRODUCTS
        </Link>

        <Link
          href="/about"
          className="px-8 py-4 rounded-full border border-white/20 text-white tracking-[0.2em] text-sm hover:bg-white/5 transition"
        >
          ABOUT A-TECH LABS
        </Link>
      </div>
    </section>
  );
}