export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "screen",
    title: "Замена экрана",
    description:
      "Оригинальные и совместимые дисплеи. Калибровка цветопередачи после замены",
    image: "/img/service-screen.webp",
  },
  {
    id: "battery",
    title: "Замена батареи",
    description:
      "Восстанавливаем емкость и автономность. Работа занимает 30–60 минут.",
    image: "/img/service-battery.webp",
  },
  {
    id: "port",
    title: "Ремонт разъёма",
    description:
      "Чистка и замена usb-c, lightning. Проверяем зарядку и передачу данные",
    image: "/img/service-port.webp",
  },
  {
    id: "water",
    title: "После воды",
    description:
      "Чистка плат ультразвуком, сушка, диагностика компонентов. Без гарантий - честно",
    image: "/img/service-water.webp",
  },
  {
    id: "diagnostics",
    title: "Диагностика",
    description:
      "15 минут, бесплатно. Скажем что сломано и сколько стоит починить",
    image: "/img/service-diagnostics.webp",
  },
  {
    id: "transfer",
    title: "Перенос данных",
    description:
      "Контакты, фото, прилпочинит - переносим между устройствами без потерь",
    image: "/img/service-transfer.webp",
  },
];