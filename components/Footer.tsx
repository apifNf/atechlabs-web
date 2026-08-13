import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function Footer() {
  return (
    <footer className="relative z-30 mt-40 border-t border-white/10">

      <SectionWrapper>

        <div className="grid gap-20 py-20 lg:grid-cols-[2.2fr_1fr_1fr_1fr]">

          {/* LEFT */}

          <div>

            <p className="text-[11px] tracking-[0.35em] uppercase text-white/35">
              A-Tech Labs
            </p>

            <h3 className="mt-6 font-serif text-4xl leading-[1.08] text-white">
              Independent
              <br />
              AI Product
              <br />
              Company
            </h3>

            <p className="mt-8 max-w-md text-[15px] leading-8 text-white/55">
              Building software products,
              intelligent automation systems,
              research infrastructure,
              and AI Visibility technologies
              for the AI-first internet.
            </p>

            <div className="mt-10 space-y-3 text-sm text-white/45">

              <div className="flex gap-3">
                <span className="w-28 text-white/25">
                  Founded
                </span>

                <span>2026</span>
              </div>

              <div className="flex gap-3">
                <span className="w-28 text-white/25">
                  Company
                </span>

                <span>Independent</span>
              </div>

              <div className="flex gap-3">
                <span className="w-28 text-white/25">
                  Focus
                </span>

                <span>AI Products & Infrastructure</span>
              </div>

            </div>

          </div>

          {/* COMPANY */}

          <div>

            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35 mb-7">
              Company
            </p>

            <div className="space-y-4">

              <Link
                href="/about"
                className="block text-white/60 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/products"
                className="block text-white/60 transition hover:text-white"
              >
                Products
              </Link>

              <Link
                href="/contact"
                className="block text-white/60 transition hover:text-white"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* ECOSYSTEM */}

          <div>

            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35 mb-7">
              Ecosystem
            </p>

            <div className="space-y-4 text-white/60">

              <div>RantauFlow</div>

              <div>CryptoInside</div>

              <div className="text-white/35">
                Oracle
              </div>

              <div>Research</div>

              <div>AI Visibility</div>

            </div>

          </div>

          {/* CONNECT */}

          <div>

            <p className="text-[11px] uppercase tracking-[0.35em] text-white/35 mb-7">
              Connect
            </p>

            <div className="space-y-4">

              <Link
                href="mailto:atechlabshello@gmail.com"
                className="block text-white/60 transition hover:text-white"
              >
                Email
              </Link>

            </div>

          </div>

        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 py-8 text-sm text-white/35 md:flex-row">

          <p>
            © 2026 A-Tech Labs. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-8">

            <span>Software Products</span>

            <span>Research Infrastructure</span>

            <span>AI Visibility</span>

          </div>

        </div>

      </SectionWrapper>

    </footer>
  );
}