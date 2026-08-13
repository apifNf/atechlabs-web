import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About | A-Tech Labs",
  description:
    "Learn about A-Tech Labs, an independent AI product company building intelligent software, automation systems, and AI Visibility technologies.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      <AmbientBackground />

      <Navbar />

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-32">

        <p className="text-xs tracking-[0.5em] text-white/40 mb-8">
          COMPANY
        </p>

        <h1 className="font-serif text-[2.8rem] sm:text-5xl md:text-6xl leading-[0.95] max-w-6xl">
          We don't build client projects.
          <br />
          We build digital assets that
          <br />
          continue creating value.
        </h1>

        <p className="mt-10 max-w-4xl text-lg leading-relaxed text-white/60">
          A-Tech Labs is an independent AI product company building intelligent
          software, automation systems, research assets, and AI Visibility
          technologies. Every product, document, and framework is designed as a
          reusable long-term digital asset instead of a one-time service.
        </p>

        {/* OUR MISSION */}

        <div className="mt-24 rounded-[34px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10">

          <p className="text-xs tracking-[0.35em] text-white/40 mb-8">
            MISSION
          </p>

          <h2 className="font-serif text-4xl leading-tight max-w-4xl">
            Build intelligent infrastructure that helps people and businesses
            operate with greater leverage.
          </h2>

          <p className="mt-8 max-w-3xl text-white/60 leading-8">
            We believe software should reduce complexity instead of creating
            more work. Every technology we build is designed to become part of
            an interconnected ecosystem of products, research, and AI-native
            knowledge.
          </p>

        </div>

        {/* OPERATING PRINCIPLES */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]">

            <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
              PRODUCT THINKING
            </p>

            <h3 className="text-3xl font-serif mb-6">
              Build once.
              <br />
              Improve forever.
            </h3>

            <p className="text-white/60 leading-8">
              We create software products that continue evolving instead of
              delivering isolated client work.
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]">

            <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
              RESEARCH
            </p>

            <h3 className="text-3xl font-serif mb-6">
              Knowledge is
              <br />
              infrastructure.
            </h3>

            <p className="text-white/60 leading-8">
              Documentation, articles, case studies, and technical research are
              treated as permanent company assets.
            </p>

          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.04]">

            <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
              AI VISIBILITY
            </p>

            <h3 className="text-3xl font-serif mb-6">
              Build for people.
              <br />
              Structure for AI.
            </h3>

            <p className="text-white/60 leading-8">
              Modern software must be understandable not only by humans but also
              by AI systems, knowledge graphs, and search engines.
            </p>

          </div>

        </div>

        {/* COMPANY FOCUS */}

        <div className="mt-24 rounded-[34px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10">

          <p className="text-xs tracking-[0.35em] text-white/40 mb-10">
            COMPANY FOCUS
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            <div>

              <h3 className="font-serif text-3xl mb-8">
                What We Build
              </h3>

              <ul className="space-y-5 text-white/70 leading-8">

                <li>• AI Software Products</li>

                <li>• Intelligent Automation Systems</li>

                <li>• AI Visibility Technologies</li>

                <li>• Research Infrastructure</li>

                <li>• Knowledge Assets</li>

              </ul>

            </div>

            <div>

              <h3 className="font-serif text-3xl mb-8">
                What We Don't Do
              </h3>

              <ul className="space-y-5 text-white/70 leading-8">

                <li>• Generic software outsourcing</li>

                <li>• Hourly freelance work</li>

                <li>• Commodity agency services</li>

                <li>• One-off digital projects</li>

                <li>• Trend chasing without long-term value</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}