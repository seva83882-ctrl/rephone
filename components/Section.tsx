import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
};

export default function Section({
  id,
  children,
  dark = false,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: dark ? "var(--hero-bg)" : "var(--bg)",
        paddingTop: "72px",
        paddingBottom: "72px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container">{children}</div>
    </section>
  );
}