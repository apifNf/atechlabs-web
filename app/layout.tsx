import "./globals.css";
import { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "A-Tech Labs",
  description:
    "A-Tech Labs is an independent digital innovation house creating premium AI-powered digital products and systems.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  {children}
</body>
    </html>
  );
}