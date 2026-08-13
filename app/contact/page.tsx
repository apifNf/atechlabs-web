import Navbar from "@/components/Navbar";
import AmbientBackground from "@/components/AmbientBackground";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      <AmbientBackground />
      <Navbar />

      <section className="relative z-20 mx-auto max-w-7xl px-6 pt-40 pb-28 md:px-8">

        <p className="mb-8 text-xs tracking-[0.45em] text-white/40">
          CONTACT
        </p>

        <h1 className="max-w-5xl font-serif text-[2.9rem] leading-[0.95] text-white sm:text-6xl md:text-7xl">
          Every great product
          <br />
          starts with
          <br />
          the right conversation.
        </h1>

        <p className="mt-10 max-w-4xl text-lg leading-8 text-white/60 md:text-xl">
          Whether you're looking to build an AI product, automate internal
          operations, improve AI Visibility, or discuss a long-term
          partnership, we'd love to hear about your ideas.
        </p>

        {/* Contact Card */}

        <div className="mt-24 rounded-[34px] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">

          <div className="border-b border-white/10 px-10 py-10">

            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              A-Tech Labs
            </p>

            <h2 className="mt-5 font-serif text-4xl">
              Let's build something meaningful.
            </h2>

          </div>

          <div className="grid lg:grid-cols-2">

            {/* Email */}

            <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10">

              <p className="mb-5 text-xs tracking-[0.35em] uppercase text-white/35">
                Email
              </p>

              <Link
                href="mailto:atechlabshello@gmail.com"
                className="
                block
                rounded-2xl
                border
                border-white/10
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.03]
                "
              >
                <h3 className="text-2xl font-semibold">
                  atechlabshello@gmail.com
                </h3>

                <p className="mt-3 text-white/55">
                  Best for partnerships, product inquiries,
                  business discussions, and long-term collaboration.
                </p>
              </Link>

            </div>

            {/* WhatsApp */}

            <div className="p-10">

              <p className="mb-5 text-xs tracking-[0.35em] uppercase text-white/35">
                WhatsApp Business
              </p>

              <Link
                href="https://wa.link/vuw10d"
                target="_blank"
                className="
                block
                rounded-2xl
                border
                border-white/10
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.03]
                "
              >
                <h3 className="text-2xl font-semibold">
                  Start WhatsApp Chat
                </h3>

                <p className="mt-3 text-white/55">
                  Faster communication for consultations,
                  project discussions, and product implementation.
                </p>
              </Link>

            </div>

          </div>

        </div>

        {/* Bottom Note */}

        <div className="mt-16 max-w-3xl">

          <p className="text-sm leading-8 text-white/40">
            A-Tech Labs selectively partners with founders, startups,
            and businesses building long-term digital infrastructure.
            Every inquiry is reviewed personally before moving into
            discovery and planning.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}