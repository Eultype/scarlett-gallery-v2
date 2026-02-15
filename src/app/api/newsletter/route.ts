import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Fonction pour échapper les caractères HTML et prévenir l'injection
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Définition du schéma de validation
const newsletterSchema = z.object({
  email: z.string().email("Format d'email invalide"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validation des données avec Zod
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({
        error: "Email invalide"
      }, { status: 400 });
    }

    const { email } = validation.data;

    // Envoyer un email de confirmation à l'utilisateur
    const { error: userError } = await resend.emails.send({
      from: "Scarlett Gallery <contact@scarlettgallery.com>",
      to: [email],
      subject: "Bienvenue dans la newsletter Scarlett Gallery",
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #95421A; padding: 30px; text-align: center;">
            <h1 style="color: white; font-family: Georgia, serif; font-size: 32px; margin: 0;">Scarlett Gallery</h1>
          </div>
          <div style="padding: 40px 30px; background-color: #FDFBF7;">
            <h2 style="color: #95421A; font-family: Georgia, serif; font-size: 24px; margin-bottom: 20px;">Bienvenue !</h2>
            <p style="margin-bottom: 15px;">Merci de vous être inscrit à notre newsletter.</p>
            <p style="margin-bottom: 15px;">Vous serez désormais informé(e) de :</p>
            <ul style="margin-bottom: 20px; color: #666;">
              <li style="margin-bottom: 10px;">Mes nouvelles créations et collections</li>
              <li style="margin-bottom: 10px;">Les expositions et événements à venir</li>
              <li style="margin-bottom: 10px;">Les offres exclusives et promotions</li>
              <li style="margin-bottom: 10px;">Les actualités de l'atelier</li>
            </ul>
            <p style="margin-bottom: 15px;">À très bientôt,</p>
            <p style="color: #95421A; font-family: Georgia, serif; font-style: italic;">Emma De Noni</p>
          </div>
          <div style="padding: 20px; text-align: center; background-color: #f5f5f5; font-size: 12px; color: #999;">
            <p>Scarlett Gallery - Artiste Peintre à Bruxelles</p>
            <p style="margin-top: 10px;">
              <a href="https://www.scarlettgallery.com" style="color: #95421A; text-decoration: none;">www.scarlettgallery.com</a>
            </p>
          </div>
        </div>
      `,
    });

    if (userError) {
      console.error("Erreur d'envoi email utilisateur:", userError);
    }

    // Envoyer une notification à l'administrateur
    const { error: adminError } = await resend.emails.send({
      from: "Scarlett Gallery <contact@scarlettgallery.com>",
      to: ["contact@scarlettgallery.com"],
      subject: "Nouvelle inscription à la newsletter",
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #95421A; border-bottom: 1px solid #eee; padding-bottom: 10px;">Nouvelle inscription newsletter</h2>
          <p><strong>Email :</strong> ${escapeHtml(email)}</p>
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            <em>Cette personne a été ajoutée à votre liste de diffusion.</em>
          </p>
        </div>
      `,
    });

    if (adminError) {
      console.error("Erreur d'envoi email admin:", adminError);
    }

    // Répondre avec succès même si l'un des emails a échoué
    // (l'important est que l'inscription soit enregistrée)
    return NextResponse.json({
      message: "Inscription réussie ! Vérifiez votre boîte mail."
    }, { status: 200 });

  } catch (error) {
    console.error("Erreur serveur newsletter:", error);
    return NextResponse.json({
      error: "Erreur serveur"
    }, { status: 500 });
  }
}
