import Link from "next/link";

const categories = [
  {
    title: "Global Product Suite",
    description:
      "Digital products for creators, founders, and businesses worldwide.",
    button: "Explore →",
    url: "https://payhip.com/b/y2fIO",
  },
  {
    title: "Indonesia Ecosystem Hub",
    description:
      "Localized products and resources built for the Indonesian market.",
    button: "Explore →",
    url: "https://clicky.id/atechlabs",
  },
  {
    title: "Bespoke Systems & Development",
    description:
      "Custom AI systems, automation, and digital infrastructure for ambitious companies.",
    button: "Work With Us →",
    url: "https://wa.link/vuw10d",
  },
];

export default function ProductGrid() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-20 md:px-10 md:pt-32 md:pb-24">

      {/* HERO */}

      <div className="mb-16 max-w-3xl">
        <h1 className="font-serif text-[2.7rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] font-medium leading-[0.95] tracking-[-0.04em] text-white">
          Premium & Global
          <br />
          Tech Studio
        </h1>

        <p className="mt-6 max-w-sm text-[15px] leading-7 text-white/60 sm:max-w-xl md:mt-8 md:max-w-2xl md:text-xl md:leading-8">
          Building products for everyone.
          <br />
          Engineering systems for those who need more.
        </p>
      </div>

      {/* GRID */}

      <div className="grid items-stretch gap-6 md:gap-8 md:grid-cols-3">

        {categories.map((item) => (

          <div
            key={item.title}
            className="
              flex
              min-h-[165px]
              md:min-h-[170px]
              flex-col
              justify-between
              rounded-[28px]
              md:rounded-[32px]
              border
              border-white/[0.06]
              bg-gradient-to-br
              from-white/[0.04]
              via-white/[0.015]
              to-transparent
              backdrop-blur-xl
              px-6
              py-6
              md:px-8
              md:py-8
              shadow-[0_10px_40px_rgba(0,0,0,0.18)]
              transition-all
              duration-500
              hover:-translate-y-[2px]
              hover:border-white/15
              hover:bg-white/[0.045]
            "
          >

            <div>

              <h2 className="font-semibold text-[1.85rem] leading-[1.12] tracking-[-0.02em] text-white md:text-[1.75rem]">
                {item.title}
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-white/60 md:mt-5 md:text-base md:leading-8">
                {item.description}
              </p>

            </div>

            <Link
              href={item.url}
              target="_blank"
              className="
                mt-7
                inline-flex
                items-center
                justify-center
                rounded-[28px]
                md:rounded-[32px]
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-3
                md:px-8
                md:py-4
                text-[13px]
                md:text-sm
                font-medium
                uppercase
                tracking-[0.22em]
                text-white
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-white/25
                hover:bg-white
                hover:text-black
              "
            >
              {item.button}
            </Link>

          </div>

        ))}

      </div>

    </section>
  );
}