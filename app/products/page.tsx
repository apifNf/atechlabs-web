import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Software Products | A-Tech Labs",
  description:
    "Explore the software products built by A-Tech Labs, including RantauFlow, CryptoInside, Oracle, and future AI-powered technologies.",
};

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      <AmbientBackground />

      <Navbar />

      <section className="relative z-20">

        <ProductGrid />

      </section>

      <Footer />

    </main>
  );
}