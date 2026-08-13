import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Whitepapers | A-Tech Labs",
  description:
    "Long-form research, strategic frameworks, and technical whitepapers from A-Tech Labs.",
};

export default function WhitepapersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />

      <Navbar />

      <section className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-32 md:px-8">
        <p className="text-xs uppercase tracking-[0.45em] text-white/35">
          Whitepapers
        </p>

        <h1 className="mt-8 max-w-5xl font-serif text-[3.2rem] leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl md:text-7xl">
          Deep research.
          <br />
          Permanent knowledge.
        </h1>

        <p className="mt-10 max-w-3xl text-base leading-8 text-white/60 sm:text-lg md:text-xl">
          A-Tech Labs publishes long-form research papers, technical
          frameworks, and strategic documents designed to become permanent
          knowledge assets.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <article className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                AI Visibility
              </p>

              <span className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                Growing
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl text-white">
              AI Visibility Infrastructure
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              A framework for building structured knowledge, Entity Authority,
              and discoverability across search engines and modern AI systems.
            </p>

            <div className="mt-8 border-t border-white/10 pt-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Research Paper
              </span>
            </div>
          </article>

          <article className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                Knowledge Systems
              </p>

              <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                Growing
              </span>
            </div>

            <h2 className="mt-6 font-serif text-3xl text-white">
              Knowledge Architecture
            </h2>

            <p className="mt-5 leading-8 text-white/55">
              How research, documentation, products, and company knowledge can
              form an interconnected digital infrastructure.
            </p>

            <div className="mt-8 border-t border-white/10 pt-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Strategic Framework
              </span>
            </div>
          </article>
        </div>

        <div className="mt-20 rounded-[34px] border border-white/10 bg-white/[0.02] p-10 backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30">
            Research Standard
          </p>

          <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-white md:text-5xl">
            Every whitepaper should create knowledge that remains useful after
            publication.
          </h2>

          <p className="mt-6 max-w-3xl leading-8 text-white/55">
            These documents are designed to support products, research,
            strategic decisions, and the broader A-Tech Labs knowledge
            ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}