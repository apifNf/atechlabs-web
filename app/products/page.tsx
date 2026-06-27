import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <AmbientBackground />
      <Navbar />

      <div className="relative z-10">
        <ProductGrid />
      </div>

      <Footer />
    </main>
  );
}