import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { journalArticles } from "@/data/journal";
import RevealTitle from "@/components/ui/RevealTitle";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Le Journal | Scarlett Gallery",
    description: "Actualités, réflexion sur l'art et coulisses de l'atelier de la Scarlett Gallery.",
};

export default function JournalPage() {
    const heroArticle = journalArticles[0];
    const secondaryArticles = journalArticles.slice(1);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                
                {/* Header */}
                <div className="mb-16 border-b border-gray-200 pb-12">
                    <RevealTitle text="Le Journal" />
                    <p className="mt-6 text-sm uppercase tracking-widest text-gray-500">
                        Art | Culture | Vision
                    </p>
                </div>

                {/* Grid Layout Magazine */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    
                    {/* Main Article (Hero) - Prend 7 colonnes sur 12 */}
                    <div className="lg:col-span-7 group cursor-pointer">
                        <Link href={`/journal/${heroArticle.slug}`} className="block">
                            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm">
                                <Image
                                    src={heroArticle.coverImage}
                                    alt={heroArticle.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                    priority
                                />
                            </div>
                            
                            <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest mb-4">
                                <span>{heroArticle.date}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span className="text-[#A44A3F]">{heroArticle.category}</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-5xl font-cormorant italic leading-tight mb-6 text-gray-900 group-hover:text-[#A44A3F] transition-colors">
                                {heroArticle.title}
                            </h2>
                            
                            <p className="text-gray-600 font-light mb-8 max-w-xl leading-relaxed">
                                {heroArticle.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-black font-bold">
                                Lire l'article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    </div>

                    {/* Secondary Articles - Prend 5 colonnes sur 12 */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        {secondaryArticles.map((article) => (
                            <Link href={`/journal/${article.slug}`} key={article.id} className="group block border-b border-gray-100 pb-12 last:border-0 last:pb-0">
                                <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-sm">
                                    <Image
                                        src={article.coverImage}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 40vw"
                                    />
                                </div>
                                
                                <div className="flex items-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest mb-3">
                                    <span>{article.date}</span>
                                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                    <span className="text-[#A44A3F]">{article.category}</span>
                                </div>
                                
                                <h3 className="text-2xl font-cormorant italic leading-tight mb-4 text-gray-900 group-hover:text-[#A44A3F] transition-colors">
                                    {article.title}
                                </h3>
                                
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 mt-4">
                                    Lire l'article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </main>
    );
}
