// Import Next
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
// Import des styles
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
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
            className={`${montserrat.variable} ${autumnChant.variable} antialiased font-sans`}
        >
        {children}
        </body>
        </html>
    );
}
