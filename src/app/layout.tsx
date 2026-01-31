// Import Next
import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
// Import des styles
import "./globals.css";
// Import des composants
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrolling from "@/components/layout/SmoothScrolling";

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
    title: "Scarlett Gallery | Artiste Peintre à Bruxelles",
    description: "Artiste peintre à Bruxelles : expositions, œuvres originales et commandes sur-mesure.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${montserrat.variable} ${cormorant.variable} ${autumnChant.variable} antialiased font-sans`}
            >
                <SmoothScrolling>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScrolling>
            </body>
        </html>
    );
}
