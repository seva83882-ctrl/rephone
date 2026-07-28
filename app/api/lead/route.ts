import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, model, issue, contact } = body;

    if (!name || !model || !issue || !contact) {
      return NextResponse.json(
        { message: "заполните все поля" },
        { status: 400 }
      );
    }

    const message = `
Новая заявка:

Имя: ${name}
Модель: ${model}
Проблема: ${issue}
Контакт: ${contact}
`;

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("ошибка отправки в тг");
    }

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка сервера" },
      { status: 500 }
    );
  }
}