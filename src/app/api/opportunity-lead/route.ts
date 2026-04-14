import { NextResponse } from "next/server";

type OpportunityLeadPayload = {
  name: string;
  email: string;
  whatsapp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  landing_page?: string;
};

export async function POST(request: Request) {
  const webhookUrl =
    process.env.LEAD_WEBHOOK_URL ?? process.env.MAKE_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "LEAD_WEBHOOK_URL não configurado." },
      { status: 500 },
    );
  }

  let payload: OpportunityLeadPayload;

  try {
    payload = (await request.json()) as OpportunityLeadPayload;
  } catch {
    return NextResponse.json({ error: "Payload inválido." }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.whatsapp) {
    return NextResponse.json(
      { error: "Nome, email e WhatsApp são obrigatórios." },
      { status: 400 },
    );
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      created_at: new Date().toISOString(),
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Falha ao enviar os dados para o webhook." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
