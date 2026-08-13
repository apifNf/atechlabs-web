import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Case Studies | A-Tech Labs",
  description:
    "Selected product development, automation systems, and AI infrastructure case studies from A-Tech Labs.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />

      <Navbar />

      <section className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-32 md:px-8">
        <p className="text-xs uppercase tracking-[0.45em] text-white/35">
          Case Studies
        </p>

        <h1 className="mt-8 max-w-5xl font-serif text-[3.2rem] leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
          Real systems.
          <br />
          Real products.
          <br />
          Real execution.
        </h1>

        <p className="mt-10 max-w-3xl text-base leading-8 text-white/60 sm:text-lg md:text-xl">
          A-Tech Labs documents the systems, products, experiments, and
          engineering decisions behind the company ecosystem.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Product
            </p>

            <h2 className="mt-5 font-serif text-3xl text-white">
              RantauFlow
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Building a personal finance platform designed around simple
              workflows, structured data, and automation for overseas workers.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-emerald-300">
              Product Case Study →
            </p>
          </article>

          <article className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
              Infrastructure
            </p>

            <h2 className="mt-5 font-serif text-3xl text-white">
              A-Tech Labs
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              Building an interconnected digital ecosystem combining products,
              research infrastructure, structured knowledge, and AI Visibility.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-violet-300">
              Company Case Study →
            </p>
          </article>
        </div>

        <div className="mt-20 rounded-[34px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
            Case Study Archive
          </p>

          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight text-white md:text-5xl">
            We document what we build so the work becomes reusable knowledge.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/55">
            Future case studies will cover product architecture, automation
            systems, AI Visibility experiments, technical decisions, and
            measurable outcomes across the A-Tech Labs ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}