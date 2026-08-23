import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { journalArticles } from "@/data/journal";
import RevealTitle from "@/components/ui/RevealTitle";
import { ArrowLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const article = journalArticles.find((a) => a.slug === resolvedParams.slug);
    if (!article) return { title: "Article introuvable" };
    return {
        title: `${article.title} | Le Journal`,
        description: article.excerpt,
        openGraph: {
            images: [article.coverImage],
        }
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const article = journalArticles.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        notFound();
    }

    // Mini parser très simple pour afficher le mock de contenu
    const renderContent = (content: string) => {
        return content.split('\n').map((line, index) => {
            const t = line.trim();
            if (!t) return null;
            if (t.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-cormorant italic mt-12 mb-6 text-gray-900">{t.replace('### ', '')}</h3>;
            }
            if (t.startsWith('> ')) {
                return (
                    <blockquote key={index} className="border-l-2 border-[#A44A3F] pl-6 my-10 text-2xl font-cormorant italic text-gray-700">
                        {t.replace('> ', '')}
                    </blockquote>
                );
            }
            return <p key={index} className="mb-6 text-gray-600 font-light leading-relaxed">{t}</p>;
        });
    };

    return (
        <main className="min-h-screen pt-32 pb-24 bg-[#FDFBF7]">
            <article className="max-w-4xl mx-auto px-6 sm:px-12">
                
                {/* Header de l'article */}
                <div className="text-center mb-16">
                    <Link href="/journal" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12">
                        <ArrowLeft size={12} /> Retour au journal
                    </Link>
                    
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500 uppercase tracking-widest mb-6">
                        <span>{article.date}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-[#A44A3F]">{article.category}</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span>{article.readingTime}</span>
                    </div>
                    
                    <RevealTitle 
                        text={article.title}
                        className="text-4xl md:text-6xl font-cormorant italic leading-tight text-gray-900 mb-8 max-w-3xl mx-auto justify-center"
                    />
                </div>

                {/* Grande image de couverture */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-20 overflow-hidden rounded-sm shadow-xl">
                    <Image
                        src={article.coverImage}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Contenu principal */}
                <div className="max-w-2xl mx-auto">
                    <p className="text-xl text-gray-800 leading-relaxed font-light mb-12 pb-12 border-b border-gray-200">
                        {article.excerpt}
                    </p>
                    
                    <div className="prose-custom">
                        {renderContent(article.content)}
                    </div>
                    
                    {/* Pied de page de l'article */}
                    <div className="mt-20 pt-12 border-t border-gray-200 text-center">
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">Partager cet article</p>
                        <div className="flex justify-center gap-6 text-sm text-gray-800">
                            <span className="cursor-pointer hover:text-[#A44A3F]">Facebook</span>
                            <span className="cursor-pointer hover:text-[#A44A3F]">Twitter</span>
                            <span className="cursor-pointer hover:text-[#A44A3F]">LinkedIn</span>
                        </div>
                        
                        <Link href="/gallery" className="inline-block mt-16 px-8 py-4 bg-black text-white text-xs uppercase tracking-widest hover:bg-[#A44A3F] transition-colors">
                            Découvrir les collections
                        </Link>
                    </div>
                </div>

            </article>
        </main>
    );
}
