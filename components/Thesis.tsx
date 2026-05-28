import SectionWrapper from "./SectionWrapper";

export default function Thesis() {
  return (
    <section className="relative z-20 px-8 py-32 max-w-7xl mx-auto">
      <p className="text-xs tracking-[0.5em] text-white/50 mb-8">
        THESIS
      </p>

      <h2 className="text-6xl leading-[1] font-serif text-white max-w-6xl">
        We believe modern leverage comes from intelligent systems,
        productized knowledge, and premium digital infrastructure.
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">Intelligence over noise</h3>
          <p className="text-white/60 text-lg leading-relaxed">
            We build systems that create leverage, not distractions.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">Systems over hustle</h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Execution scales through infrastructure, not chaos.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-8">
          <h3 className="text-2xl font-semibold mb-4">Premium execution</h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Design, utility, and experience should feel intentional.
          </p>
        </div>
      </div>
    </section>
  );
}