import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <ProductGrid />
      <Footer />
    </main>
  );
}