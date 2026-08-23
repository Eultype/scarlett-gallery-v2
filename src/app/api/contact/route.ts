import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { checkRateLimit, escapeHtml } from "@/lib/security";

const resend = new Resend(process.env.RESEND_API_KEY);

// Définition du schéma de validation "blindé"
const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  phone: z.string().min(8, "Numéro de téléphone invalide"),
  subject: z.enum(["commande", "achat", "exposition", "autre"]),
  date: z.string().optional(),
  message: z.string().min(1, "Le message ne peut pas être vide").max(500, "Le message est limité à 500 caractères"),
});

export async function POST(req: Request) {
  try {
    // 1. Anti-Spam : Rate Limiting (Max 3 requêtes par heure par IP)
    const ip = req.headers.get("x-forwarded-for") || "unknown_ip";
    const isAllowed = checkRateLimit(ip, 3, 60 * 60 * 1000); // 3 requêtes / heure
    
    if (!isAllowed) {
      return NextResponse.json({
        error: "Trop de requêtes. Veuillez réessayer plus tard."
      }, { status: 429 });
    }

    const body = await req.json();
    
    // Validation des données avec Zod
    const validation = contactSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({
        error: "Données invalides"
      }, { status: 400 });
    }

    const { name, email, phone, subject, date, message } = validation.data;

    const { error } = await resend.emails.send({
      from: "Scarlett Gallery <contact@scarlettgallery.com>", 
      to: ["contact@scarlettgallery.com"], 
      subject: `Nouveau message de ${name} : ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #95421A; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouveau message de Scarlett Gallery</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>
          <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
          <p><strong>Date souhaitée :</strong> ${escapeHtml(date || "Non renseignée")}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #95421A;">
            <strong>Message :</strong><br />
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}