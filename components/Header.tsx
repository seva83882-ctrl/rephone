"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

type Section = "services" | "contacts" | "lead";

export default function Header() {
  const [active, setActive] = useState<Section>("services");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sections: Section[] = [
        "services",
        "contacts",
        "lead",
      ];

      for (const id of sections) {
        const element = document.getElementById(id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: Section) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : ""
      }`}
    >
      <div className={`container ${styles.inner}`}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="rephone"
        >
          rephone
        </Link>

        <nav
          className={styles.nav}
          aria-label="Навигация"
        >
          <button
            onClick={() => scrollTo("services")}
            className={`${styles.navLink} ${
              active === "services" ? styles.active : ""
            }`}
          >
            услуги
          </button>

          <button
            onClick={() => scrollTo("contacts")}
            className={`${styles.navLink} ${
              active === "contacts" ? styles.active : ""
            }`}
          >
            контакты
          </button>

          <button
            onClick={() => scrollTo("lead")}
            className={`${styles.navLink} ${styles.navCta} ${
              active === "lead" ? styles.active : ""
            }`}
          >
            оставить заявку
          </button>
        </nav>
      </div>
    </header>
  );
}