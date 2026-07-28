import styles from "./Facts.module.css";

const facts = [
  "диагностика бесплатно",
  "запчасти в наличии",
  "гарантия 90 дней",
];

export default function Facts() {
  return (
    <section className={styles.facts} aria-label="Ключевые факты">
      <div className="container">
        <div className={styles.row}>
          {facts.map((fact, index) => (
            <div key={fact} className={styles.item}>
              {index !== 0 && (
                <span className={styles.sep} aria-hidden="true">
                  /
                </span>
              )}
              <span>{fact}</span>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          без навязывания «заменим всё сразу»
        </p>
      </div>
    </section>
  );
}