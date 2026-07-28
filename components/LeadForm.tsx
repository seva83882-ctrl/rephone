"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import styles from "./LeadForm.module.css";

type FormFields = {
  name: string;
  model: string;
  issue: string;
  contact: string;
};

const initialFields: FormFields = {
  name: "",
  model: "",
  issue: "",
  contact: "",
};

export default function LeadForm() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      setSuccess(true);
      setFields(initialFields);
    } catch {
      alert("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeIn>
      <section
        id="lead"
        className={styles.section}
      >
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.header}>
              <h2 className={styles.title}>
                узнать цену за 2 минуты
              </h2>

              <p className={styles.subtitle}>
                опишите проблему, ответим с вариантом и ценой
              </p>
            </div>

            {success && (
              <div className={styles.success}>
                <h3 className={styles.successTitle}>
                  Заявка отправлена
                </h3>

                <p className={styles.successText}>
                  Мы скоро свяжемся с вами
                </p>
              </div>
            )}

            {!success && (
              <form
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.field}>
                  <label className={styles.label}>
                    Имя
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Как вас зовут"
                    value={fields.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    Модель телефона
                  </label>

                  <input
                    name="model"
                    type="text"
                    placeholder="Например, iPhone 13"
                    value={fields.model}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    Проблема
                  </label>

                  <textarea
                    name="issue"
                    rows={4}
                    placeholder="Опишите проблему"
                    value={fields.issue}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>
                    Телефон или Telegram
                  </label>

                  <input
                    name="contact"
                    type="text"
                    placeholder="+7 900 000‑00‑00"
                    value={fields.contact}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={loading}
                >
                  {loading
                    ? "отправка..."
                    : "отправить заявку"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}