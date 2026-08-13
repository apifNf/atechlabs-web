import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

import ResearchHero from "@/components/ResearchHero";
import ResearchPhilosophy from "@/components/ResearchPhilosophy";
import ResearchCategories from "@/components/ResearchCategories";
import KnowledgeInfrastructure from "@/components/KnowledgeInfrastructure";

export default function ResearchPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />

      <Navbar />

      <div className="relative z-10">
        <ResearchHero />

        <ResearchPhilosophy />

        <ResearchCategories />

        <KnowledgeInfrastructure />
      </div>

      <Footer />
    </main>
  );
}