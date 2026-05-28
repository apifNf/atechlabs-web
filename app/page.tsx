import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <Hero />
      <Thesis />
      <Footer />
    </main>
  );
}