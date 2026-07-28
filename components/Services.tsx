import Image from "next/image";
import { services } from "@/lib/data";
import styles from "./Services.module.css";

export default function Services() {
  return (
      <section
        id="services"
        className={styles.section}
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className={styles.header}>
            <h2
              className={styles.title}
              id="services-heading"
            >
              <span
                className={styles.dot}
                aria-hidden="true"
              />
              что ремонтируем чаще всего
            </h2>

            <p className={styles.subtitle}>
              если вашей проблемы нет в списке — просто напишите
            </p>
          </div>

          <ul className={styles.grid} role="list">
            {services.map((service, index) => (
          <li
            key={service.id}
            className={styles.card}
            style={{
              transitionDelay: `${index * 90}ms`,
            }}
          >
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={240}
                    className={styles.image}
                  />
                </div>

                <div className={styles.body}>
                  <h3 className={styles.cardTitle}>
                    {service.title}
                  </h3>

                  <p className={styles.cardDesc}>
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
  );
}
