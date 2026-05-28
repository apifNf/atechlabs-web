import SectionWrapper from "./SectionWrapper";

const pillars = [
  {
    title: "Intelligence over noise",
    desc: "We build systems that create leverage, not distractions.",
  },
  {
    title: "Systems over hustle",
    desc: "Execution scales through infrastructure, not chaos.",
  },
  {
    title: "Premium execution",
    desc: "Design, utility, and experience should feel intentional.",
  },
];

export default function Philosophy() {
  return (
    <SectionWrapper className="pb-32">
      <div className="grid gap-6 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-xl font-medium text-white">
              {pillar.title}
            </h3>

            <p className="leading-relaxed text-white/65">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}