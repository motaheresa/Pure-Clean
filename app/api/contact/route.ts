import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // transporter config (example using Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // your gmail address
        pass: process.env.SMTP_PASS, // app password (not your gmail password!)
      },
    });

    const mailOptions = {
      from: `"${body.Name}" <${body["E-Mail-Adresse"]}>`,
      to: process.env.CONTACT_RECEIVER, // your receiving email
      subject: `Neue Nachricht von ${body.Name} – ${body.Betreff || "Kein Betreff"}`,
      text: `
        Name: ${body.Name}
        E-Mail: ${body["E-Mail-Adresse"]}
        Telefonnummer: ${body.Telefonnummer}
        Adresse: ${body.Adresse}, ${body.Postleitzahl} ${body.Ort}
        
        Nachricht:
        ${body.Nachricht}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent!" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
