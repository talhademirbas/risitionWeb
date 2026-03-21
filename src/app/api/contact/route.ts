import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "talhaademirbas@gmail.com";

const FROM =
  process.env.RESEND_FROM_EMAIL ?? "Risition <onboarding@resend.dev>";

const MAX_LEN = { name: 200, message: 5000 };

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Set RESEND_API_KEY in the environment.",
      },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  const nameStr =
    typeof name === "string" ? name.trim() : "";
  const emailStr =
    typeof email === "string" ? email.trim() : "";
  const messageStr =
    typeof message === "string" ? message.trim() : "";

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (nameStr.length > MAX_LEN.name) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (!isValidEmail(emailStr)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (messageStr.length > MAX_LEN.message) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const text = [
    `New message from the Risition contact form`,
    ``,
    `Name: ${nameStr}`,
    `Email: ${emailStr}`,
    ``,
    messageStr,
  ].join("\n");

  const { error } = await resend.emails.send({
    from: FROM,
    to: CONTACT_TO,
    replyTo: emailStr,
    subject: `[Risition] Message from ${nameStr}`,
    text,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Could not send message. Try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
