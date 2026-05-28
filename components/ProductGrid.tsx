import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

const products = [
  {
    title: "A-Tech Founder OS",
    description: "Digital business system for entrepreneurs.",
    url: "https://clicky.id/atechlabs",
  },
];

export default function ProductGrid() {
  return (
    <SectionWrapper className="pt-40 pb-24">
      <div className="mb-16 max-w-4xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-white/40">
          Products
        </p>

        <h1 className="font-serif text-5xl leading-tight text-white md:text-7xl">
          Access the A-Tech ecosystem.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/65">
          Explore premium digital products built by A-Tech Labs.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.05]"
          >
            <h2 className="font-serif text-3xl text-white">
              {product.title}
            </h2>

            <p className="mt-4 leading-relaxed text-white/65">
              {product.description}
            </p>

            <Link
              href={product.url}
              target="_blank"
              className="mt-8 inline-block rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:scale-[1.02]"
            >
              Access Product
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-sm uppercase tracking-[0.25em] text-white/35">
          More products coming soon.
        </p>
      </div>
    </SectionWrapper>
  );
}