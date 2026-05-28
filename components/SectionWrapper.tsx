import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>
      {children}
    </section>
  );
}