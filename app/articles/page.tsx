import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

import ArticlesHero from "@/components/ArticlesHero";
import FeaturedArticle from "@/components/FeaturedArticle";
import ArticlesGrid from "@/components/ArticlesGrid";

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />

      <Navbar />

      <div className="relative z-10">
        <ArticlesHero />

        <FeaturedArticle />

        <ArticlesGrid />
      </div>

      <Footer />
    </main>
  );
}