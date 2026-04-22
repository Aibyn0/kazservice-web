import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  contact?: string;
  company?: string;
  need?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as LeadPayload;

  if (!payload.name || !payload.contact || !payload.need) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ ok: true, mode: "dev-no-webhook" });
  }

  const forwarded = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      source: "kazservice-website",
      submittedAt: new Date().toISOString(),
      lead: payload,
    }),
  });

  if (!forwarded.ok) {
    return NextResponse.json({ error: "webhook failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
