import FadeIn from "./FadeIn";
import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <FadeIn>
      <section
        id="contacts"
        className={styles.section}
      >
        <div className={`container ${styles.wrapper}`}>
          <div className={styles.left}>
            <h2 className={styles.title}>
              Связаться
            </h2>

            <p className={styles.subtitle}>
              Если нужен сайт или автоматизация -
              напишите любым удобным способом. (здесь будут ваши услуги и контакты)
            </p>

            <div className={styles.buttons}>
              <a
                href="https://t.me/form2tg"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Telegram
              </a>

              <a
                href="https://max.ru/u/f9LHodD0cOIh7YgeXHwqCY_MbhmLgxI9yEr-c5CDidcdG25CF4eMoFrPJzc"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
              >
                MAX
              </a>
            </div>

            <span className={styles.note}>
              Обычно отвечаю в течение дня
            </span>
          </div>

          <div className={styles.right}>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?text=Москва,%20Тверская%201"
                width="100%"
                height="100%"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <span className={styles.mapNote}>
              здесь будет ваш адрес
            </span>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}