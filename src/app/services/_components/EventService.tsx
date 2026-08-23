"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Link from "next/link";
import Image from "next/image";
import ListItem from "@/components/ui/ListItem";
import Badge from "@/components/ui/Badge";
import RevealTitle from "@/components/ui/RevealTitle";

export default function EventService() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            {/* Image */}
            <div className="w-full md:w-5/12 relative aspect-[4/5] overflow-hidden">
                <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                    <Image
                        src="/images/gallery/linogravures/lino_4saisons_mur.webp"
                        alt="Exposition d'art et linogravures originales par Scarlett Gallery"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </motion.div>
            </div>
            
            {/* Contenu Texte */}
            <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                
                <div className="mb-6">
                    <Badge text="Galeries & Événements" variant="solid" />
                </div>
                
                <RevealTitle text="Expositions & Event" className="font-cormorant text-5xl md:text-6xl text-gray-900 font-light italic mb-4" />
                
                <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>
                
                <p className="text-xl md:text-2xl text-terra italic mb-8">Une touche d'âme à vos espaces</p>

                <p className="text-gray-500 font-light leading-relaxed text-lg mb-8 max-w-lg">
                    Je suis disponible pour participer à des expositions temporaires. Je propose également mes œuvres
                    à la location pour des événements d'entreprise, des shootings photo ou du Home Staging.
                    Apportez une touche d'âme et d'élégance à vos espaces professionnels.
                </p>
                
                <ul className="space-y-4 mb-10 w-full max-w-md flex flex-col md:items-end">
                    <ListItem text="Location courte ou longue durée" align="right" />
                    <ListItem text="Vernissages" align="right" />
                    <ListItem text="Marché de créateur" align="right" />
                </ul>
                
                <Link href="/contact" className="group inline-flex flex-col items-start md:items-end">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                        Me contacter
                    </span>
                    <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                </Link>
            </div>
        </section>
    );
}
