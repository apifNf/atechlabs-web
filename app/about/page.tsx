import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />
      <Navbar />

      <section className="relative z-20 mx-auto max-w-7xl px-8 pt-28 pb-20 md:pt-40 md:pb-24">

        <p className="mb-8 text-xs tracking-[0.5em] text-white/50">
          ABOUT
        </p>

        <h1
          className="
            max-w-5xl
            font-serif
            text-[2.7rem]
            leading-[0.95]
            text-white
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          A-Tech Labs exists to build intelligent digital leverage for the
          modern internet generation.
        </h1>

        <p
          className="
            mt-8
            max-w-4xl
            text-[15px]
            leading-8
            text-white/70
            sm:text-base
            md:mt-10
            md:text-xl
            md:leading-relaxed
          "
        >
          A-Tech Labs is an independent digital innovation house creating
          premium AI-powered digital products, automation systems, and digital
          infrastructure for ambitious modern operators.
        </p>

        <div
          className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-black/30
            p-8
            backdrop-blur-sm
            transition-all
            duration-300
            hover:border-white/20
            hover:bg-white/[0.03]
            md:mt-20
            md:p-10
          "
        >
          <h2
            className="
              mb-6
              text-[2rem]
              font-semibold
              leading-tight
              md:mb-8
              md:text-4xl
            "
          >
            What We Build
          </h2>

          <ul
            className="
              space-y-5
              text-lg
              leading-8
              text-white/70
              md:space-y-6
              md:text-xl
            "
          >
            <li>AI-powered systems</li>
            <li>Digital products</li>
            <li>Automation workflows</li>
            <li>Premium learning infrastructure</li>
          </ul>
        </div>

      </section>

      <Footer />
    </main>
  );
}