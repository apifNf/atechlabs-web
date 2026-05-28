import Link from "next/link";
import SectionWrapper from "./SectionWrapper";

export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/5 py-10 mt-32">
      <SectionWrapper>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              A-Tech Labs
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8">
            <Link
              href="/products"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Products
            </Link>

            <Link
              href="https://www.tiktok.com/@atechlabs"
              target="_blank"
              className="text-sm text-white/60 transition hover:text-white"
            >
              TikTok
            </Link>

            <Link
              href="mailto:atechlabshello@gmail.com"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="#"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="text-sm text-white/60 transition hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </footer>
  );
}