import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
      <section className={styles.section}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Отзывы клиентов</h2>

            <div className={styles.review}>
              <div className={styles.line} />
              <div>
                <p className={styles.text}>
                  Поменяли экран за 40 минут. Отличный сервис. Рекомендую.
                </p>
                <span className={styles.author}>Александр</span>
              </div>
            </div>

            <div className={styles.review}>
              <div className={styles.line} />
              <div>
                <p className={styles.text}>
                  Честно сказали, что ремонт нецелесообразен. Уважаю такой подход.
                </p>
                <span className={styles.author}>Мария</span>
              </div>
            </div>

            <div className={styles.review}>
              <div className={styles.line} />
              <div>
                <p className={styles.text}>
                  Перенесли данные со старого телефона. Всё аккуратно и быстро.
                </p>
                <span className={styles.author}>Илья</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
