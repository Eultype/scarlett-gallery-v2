import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, date, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Scarlett Gallery <contact@scarlettgallery.com>", 
      to: ["contact@scarlettgallery.com"], 
      subject: `Nouveau message de ${name} : ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #95421A; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouveau message de Scarlett Gallery</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Date souhaitée :</strong> ${date || "Non renseignée"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #95421A;">
            <strong>Message :</strong><br />
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
