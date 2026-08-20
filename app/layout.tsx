import "./globals.css";
import { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Script from "next/script";

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

        {/* A-Tech Labs Intelligence — Chatbase */}
        <Script id="chatbase-loader" strategy="afterInteractive">
          {`
            (function () {
              if (
                !window.chatbase ||
                window.chatbase("getState") !== "initialized"
              ) {
                window.chatbase = (...arguments) => {
                  if (!window.chatbase.q) {
                    window.chatbase.q = [];
                  }

                  window.chatbase.q.push(arguments);
                };

                window.chatbase = new Proxy(window.chatbase, {
                  get(target, prop) {
                    if (prop === "q") {
                      return target.q;
                    }

                    return (...args) => target(prop, ...args);
                  },
                });
              }

              const onLoad = function () {
                const script = document.createElement("script");

                script.src =
                  "https://www.chatbase.co/embed.min.js";

                script.id =
                  "CVxrgQKCaXzGw8zPDhp8s";

                script.domain =
                  "www.chatbase.co";

                document.body.appendChild(script);
              };

              if (document.readyState === "complete") {
                onLoad();
              } else {
                window.addEventListener("load", onLoad);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}