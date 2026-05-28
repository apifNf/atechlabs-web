import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <AmbientBackground />
      <Navbar />

      <section className="relative z-20 px-8 pt-40 pb-24 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.5em] text-white/50 mb-8">
          CONTACT
        </p>

        <h1 className="text-7xl leading-[0.95] font-serif text-white max-w-4xl">
          Let’s build something intelligent.
        </h1>

        <p className="mt-10 text-2xl text-white/70 max-w-3xl">
          Reach out for partnerships, product inquiries, or collaboration.
        </p>

        <div className="mt-20 rounded-3xl border border-white/10 bg-black/30 backdrop-blur-sm p-10">
          <div className="space-y-8 text-white/70 text-xl">
            <p>TikTok: https://www.tiktok.com/@atechlabs</p>
            <p>Email: atechlabshello@gmail.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}