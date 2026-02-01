// Import Next
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
// Import des styles
import "./globals.css";
// Import des composants du layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/layout/SmoothScrolling";
import ImageProtection from "@/components/layout/ImageProtection";
import InitialLoader from "@/components/ui/InitialLoader";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

const autumnChant = localFont({
    src: "./fonts/AutumnChant.woff2",
    variable: "--font-autumn",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Scarlett Gallery | Artiste Peintre à Bruxelles",
        template: "%s | Scarlett Gallery",
    },
    description: "Explorez l'univers d'Emma De Noni, artiste peintre à Bruxelles. Portraits à l'huile, linogravures et œuvres originales empreintes de lumière et d'émotions.",
    keywords: [
        "Emma De Noni", 
        "Scarlett Gallery", 
        "Artiste peintre Bruxelles", 
        "Peinture à l'huile Belgique", 
        "Portraits sur mesure", 
        "Linogravure originale", 
        "Art contemporain Bruxelles", 
        "Achat tableau original", 
        "Galerie d'art en ligne"
    ],
    metadataBase: new URL("https://www.scarlettgallery.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Scarlett Gallery | Emma De Noni",
        description: "Découvrez une collection d'œuvres originales à l'huile et profitez de services sur mesure.",
        url: "https://scarlettgallery.com",
        siteName: "Scarlett Gallery",
        images: [
            {
                url: "/images/about/Scarlett_peint.webp",
                width: 1200,
                height: 630,
                alt: "L'atelier d'Emma De Noni",
            },
        ],
        locale: "fr_FR",
        type: "website",

    },
    twitter: {
        card: "summary_large_image",
        title: "Scarlett Gallery | Emma De Noni",
        description: "Artiste peintre à Bruxelles. Portraits et linogravures.",
        images: ["/images/about/Scarlett_peint.webp"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body
                className={`${montserrat.variable} ${cormorant.variable} ${autumnChant.variable} antialiased font-sans`}
            >
                {/* Script critique bloquant pour éviter le flash de contenu avant le loader */}
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            if (!sessionStorage.getItem("hasVisitedScarlett")) {
                                document.documentElement.classList.add('js-loading');
                            }
                        `
                    }}
                />
                <SmoothScrolling>
                    <InitialLoader />
                    <ImageProtection />
                    <div id="main-content">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                    <SpeedInsights />
                </SmoothScrolling>
            </body>
        </html>
    );
}
