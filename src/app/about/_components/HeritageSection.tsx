"use client";

// Import Next
import Image from "next/image";
// Import Framer Motion
import { motion, useTransform, MotionValue } from "framer-motion";

// Interface
interface HeritageSectionProps {
    scrollYProgress: MotionValue<number>;
}

// Composant HeritageSection de la page about
export default function HeritageSection({ scrollYProgress }: HeritageSectionProps) {
    const yText = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const yImg = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section className="relative py-40">
            {/* Texte de fond 'Héritage' */}
            <motion.div
                style={{ y: yText }}
                className="absolute top-20 md:top-20 lg:top-5 xl:top-5 right-16 md:right-35 lg:right-40 xl:right-60 opacity-[0.07] md:opacity-[0.03] select-none pointer-events-none whitespace-nowrap"
            >
                <span className="font-autumn text-[10vw]">Heritage</span>
            </motion.div>

            <div className="mx-auto px-4 md:px-10 xl:px-20 relative">
                <div className="mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-16 mb-10">
                        <div className="md:w-3/5 space-y-8">
                            {/* Badge */}
                            <div className="inline-block bg-terra text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded">
                                L'Héritage
                            </div>

                            {/* Titre */}
                            <h2 className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light italic">Un héritage précieux</h2>

                            {/* Sous-titre */}
                            <p className="text-2xl text-terra italic">Le murmure de l&apos;atelier</p>

                            {/* Description */}
                            <p className="text-xl text-gray-600 leading-relaxed text-justify">
                                &quot;Ma passion n&apos;est pas née dans une école d&apos;art, mais dans le petit atelier
                                de ma tatie Lily. C&apos;est elle qui m&apos;a appris que la peinture
                                ne se regarde pas avec les yeux, mais avec le cœur.&quot;
                            </p>
                        </div>

                        {/* Image de l'artiste et sa tante */}
                        <motion.div
                            style={{ y: yImg }}
                            className="md:w-2/5 aspect-[3/4] rounded-lg relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
                        >
                            <Image
                                src="/images/about/emma-line.webp"
                                alt="L'atelier"
                                fill
                                className="object-cover rounded-lg border-[4px] border-white"
                            />
                        </motion.div>
                    </div>

                    {/* Fin de la section Héritage */}
                </div>
            </div>
        </section>
    );
}
