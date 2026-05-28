import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      <section className="relative z-20 px-8 pt-40 pb-24 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-white/50 mb-8">
          ABOUT
        </p>

        <h1 className="text-7xl leading-[0.95] font-serif text-white max-w-5xl">
          A-Tech Labs exists to build intelligent digital leverage for the
          modern internet generation.
        </h1>

        <p className="mt-10 text-2xl text-white/70 max-w-4xl leading-relaxed">
          A-Tech Labs is an independent digital innovation house creating
          premium AI-powered digital products, automation systems, and digital
          infrastructure for ambitious modern operators.
        </p>

        <div className="mt-20 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-10">
          <h2 className="text-4xl font-semibold mb-8">What We Build</h2>

          <ul className="space-y-6 text-white/70 text-xl">
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