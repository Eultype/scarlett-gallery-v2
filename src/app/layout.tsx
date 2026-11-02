// Import Next
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
import JsonLd from "@/components/seo/JsonLd";
import CustomCursor from "@/components/ui/CustomCursor";

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
        default: "Scarlett Gallery | Emma De Noni — Artiste Peintre à Bruxelles",
        template: "%s | Scarlett Gallery",
    },
    description: "Explorez l'univers d'Emma De Noni, artiste peintre à Bruxelles. Portraits à l'huile sur mesure, linogravures originales et œuvres contemporaines empreintes de lumière.",
    keywords: [
        "Emma De Noni", 
        "Scarlett Gallery", 
        "Artiste peintre Bruxelles", 
        "Peinture à l'huile Belgique", 
        "Portraits sur mesure Bruxelles", 
        "Linogravure originale", 
        "Art contemporain Bruxelles", 
        "Achat tableau original Belgique", 
        "Galerie d'art en ligne"
    ],
    metadataBase: new URL("https://www.scarlettgallery.com"),
    openGraph: {
        title: "Scarlett Gallery | Emma De Noni — Artiste Peintre à Bruxelles",
        description: "Découvrez une collection d'œuvres originales à l'huile, linogravures et portraits sur mesure à Bruxelles.",
        url: "https://www.scarlettgallery.com",
        siteName: "Scarlett Gallery",
        images: [
            {
                url: "/images/about/Scarlett_peint.webp",
                width: 1200,
                height: 630,
                alt: "L'atelier d'Emma De Noni — Scarlett Gallery à Bruxelles",
            },
        ],
        locale: "fr_BE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Scarlett Gallery | Emma De Noni",
        description: "Artiste peintre à Bruxelles. Portraits à l'huile sur mesure et linogravures originales.",
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
                <JsonLd />
                {/* Script critique pour afficher l'overlay du loader dès la première frame sans cacher #main-content aux moteurs de recherche */}
                <script 
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (!sessionStorage.getItem("hasVisitedScarlett") && !/bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent)) {
                                    document.documentElement.classList.add('js-show-loader');
                                }
                            } catch (e) {}
                        `
                    }}
                />
                <SmoothScrolling>
                    <InitialLoader />
                    <ImageProtection />
                    <div id="main-content" className="flex flex-col min-h-screen">
                        <CustomCursor />
                        <Navbar />
                        <div className="flex-grow flex flex-col min-h-[calc(100vh-100px)]">
                            {children}
                        </div>
                        <Footer />
                    </div>
                    <SpeedInsights />
                    <Analytics />
                </SmoothScrolling>
            </body>
        </html>
    );
}
