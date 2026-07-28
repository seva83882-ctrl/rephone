"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

type Props = {
  children: ReactNode;
};

export default function FadeIn({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={visible ? "fade visible" : "fade"}
    >
      {children}
    </div>
  );
}