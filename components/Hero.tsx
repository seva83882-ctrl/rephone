"use client";

import styles from "./Hero.module.css";

const bullets = [
  "диагностика за 15 минут",
  "согласуем цену до ремонта",
  "гарантия до 90 дней",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: "url('/img/hero.webp')" }}
    >
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            ремонт телефона
            <br />
            без «оставьте на неделю»
          </h1>

          <ul className={styles.bullets}>
            {bullets.map((item) => (
              <li key={item} className={styles.bullet}>
                {item}
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button
              className={styles.btnPrimary}
              onClick={() => scrollTo("lead")}
            >
              узнать цену
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => scrollTo("services")}
            >
              что ремонтируем
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
