import { NextRequest, NextResponse } from "next/server";

// This route is a placeholder. Wire it to a real email service (e.g. Resend,
// SendGrid, Postmark) or CRM webhook before going live. See README.md for
// setup notes and required environment variables.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // TODO: send an email / webhook here using an API key from
    // process.env, e.g.:
    //
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     from: "AVIVA Website <no-reply@avivafoodstuff.ae>",
    //     to: "avivafoodstuff@gmail.com",
    //     subject: `New quote request from ${body.companyName || body.fullName}`,
    //     text: JSON.stringify(body, null, 2)
    //   })
    // });

    console.log("New quote request:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
