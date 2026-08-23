"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ListItem from "@/components/ui/ListItem";
import Badge from "@/components/ui/Badge";
import RevealTitle from "@/components/ui/RevealTitle";

export default function BespokeService() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            {/* Image */}
            <div className="w-full md:w-5/12 relative aspect-[4/5] overflow-hidden">
                <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                    <Image
                        src="/images/about/services-1.webp"
                        alt="Réalisation d'un portrait sur mesure à l'huile"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </motion.div>
            </div>
            
            {/* Contenu Texte */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
                
                <div className="mb-6">
                    <Badge text="Création Unique" variant="solid" />
                </div>
                
                <h2 className="font-cormorant text-5xl md:text-6xl text-gray-900 font-light italic mb-4">Commande Sur Mesure</h2>
                
                <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>
                
                <p className="text-xl md:text-2xl text-terra italic mb-8">Votre vision, ma palette</p>

                <p className="text-gray-500 font-light leading-relaxed text-lg mb-8 max-w-lg">
                    Vous avez une vision, une couleur, une émotion que vous souhaitez figer sur toile ?
                    Je réalise des œuvres personnalisées en dialogue avec votre intérieur et vos envies.
                    Nous définissons ensemble le format, la palette et l'ambiance.
                </p>
                
                <ul className="space-y-4 mb-10 w-full max-w-md">
                    <ListItem text="Consultation initiale (Mail, appel, visio ou café)" />
                    <ListItem text="Propositions de croquis et Moodboard" />
                    <ListItem text="Suivi photo de l'avancement" />
                    <ListItem text="Livraison et conseils d'accrochage" />
                </ul>
                
                <Link href="/contact" className="group inline-flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                        Démarrer un projet
                    </span>
                    <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                </Link>
            </div>
        </section>
    );
}
