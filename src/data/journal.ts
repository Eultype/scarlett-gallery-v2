export type JournalArticle = {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    category: string;
    readingTime: string;
};

export const journalArticles: JournalArticle[] = [
    {
        id: "1",
        slug: "genese-de-la-serie-saisons",
        title: "La Genèse de la Série « Saisons » : Cécité Poétique et Renouveau",
        excerpt: "Plongée au cœur de ma série d'huiles sur toile dédiée aux quatre saisons, où le regard s'éclipse pour laisser place à la sensation pure et à la nature florissante.",
        content: `
L'idée de la série **« Saisons »** (Blindspring, Blindsummer, Blindfall, Blindwinter) est née d'une volonté d'explorer notre connexion intime à la nature, non pas par ce que l'on voit, mais par ce que l'on ressent.

### Pourquoi les yeux clos ?
Dans chaque toile de la série, le regard de la figure féminine est voilé ou fermé par la végétation — des pivoines au printemps, des feuilles cuivrées en automne. Cette *cécité poétique* n'est pas une privation de sens, bien au contraire. C'est une invitation à l'intériorité. En fermant les yeux sur le monde extérieur, le sujet fusionne avec son environnement végétal.

> "Fermer les yeux, c'est parfois la seule façon de voir véritablement la lumière et de ressentir le cycle immuable de la terre."

### Le choix de la palette
Chaque saison possède sa propre fréquence vibratoire. Pour *Blindspring*, j'ai travaillé sur une lumière azurée et des teintes florales douces pour évoquer l'éveil. Pour *Blindsummer*, le vert émeraude saturé traduit la chaleur et l'abondance. La peinture à l'huile me permet, grâce au travail des glacis successifs, d'apporter cette profondeur et cette translucidité sur la peau, créant un dialogue permanent entre l'humain et le végétal.
        `,
        coverImage: "/images/gallery/saisons/printempsSD_cadre_2.webp",
        date: "14 Mai 2026",
        category: "Atelier & Inspirations",
        readingTime: "3 min"
    },
    {
        id: "2",
        slug: "le-processus-de-la-linogravure",
        title: "Le Processus de la Linogravure : L'Art de Soustraire la Lumière",
        excerpt: "De l'esquisse au passage sous presse, découvrez les coulisses de la création de mes estampes, où chaque trait gravé est un pas vers la lumière.",
        content: `
Contrairement à la peinture à l'huile où l'on ajoute de la matière pour créer une image, la **linogravure** est un art de la soustraction. C'est un processus physique, parfois exigeant, mais profondément méditatif.

### L'exigence du noir et blanc
Quand j'ai créé la série de linogravures (comprenant des œuvres comme *Antique*, *Séville* ou *4 Saisons*), le plus grand défi a été de penser uniquement en contrastes absolus. En linogravure, il n'y a pas de gris. La gouge vient creuser le linoléum pour créer les zones de lumière. Tout ce qui reste en relief accrochera l'encre noire.

### L'épreuve de la presse
Une fois la matrice entièrement gravée (ce qui demande souvent des dizaines d'heures de minutie), vient le moment magique de l'encrage au rouleau. Le son caractéristique de l'encre grasse qui s'étale sur le lino est le prélude au tirage. 

> "Le passage sous presse révèle toujours des surprises. L'estampe finale possède une texture et une vie propre que le dessin original ne pouvait pas anticiper."

Chaque tirage de mes linogravures est réalisé à la main, rendant chaque exemplaire d'une série subtilement unique. C'est ce côté brut et authentique qui rend cette technique si fascinante à mes yeux.
        `,
        coverImage: "/images/gallery/linogravures/lino_seville_cadre.jpg",
        date: "02 Mai 2026",
        category: "Technique",
        readingTime: "4 min"
    },
    {
        id: "3",
        slug: "les-minis-capturer-l-ephemere",
        title: "Série « Les Minis » : Capturer l'Éphémère en Petit Format",
        excerpt: "Comment retranscrire l'immensité d'un ciel d'orage ou la douceur d'un rayon de soleil sur de toutes petites toiles ? Retour sur ma série la plus intimiste.",
        content: `
On pense souvent qu'une œuvre doit être monumentale pour dégager de la puissance. Avec la série **« Les Minis »**, j'ai voulu prouver le contraire en condensant l'intensité des éléments naturels dans des formats très réduits, comme des fenêtres intimistes.

### Le défi du petit format
Peindre sur des formats de 13x18cm ou 15x15cm demande une approche totalement différente. Le geste doit être à la fois précis et expressif. Sur des œuvres comme *Storm* ou *Last Ray*, l'objectif était de capturer une atmosphère monumentale (la colère du ciel, la percée de la lumière dorée) avec un minimum de coups de pinceau.

### La lumière comme sujet principal
Dans toutes ces petites huiles sur toile, le véritable sujet n'est ni le nuage, ni la mer, ni même les mains (comme dans *Suncatching*). Le vrai sujet, c'est **la lumière**. 

> "La lumière est ce qui donne vie à l'obscurité. Dans ces petits formats, chaque éclat doré ou rosé est travaillé pour irradier depuis la toile."

Le petit format oblige le spectateur à s'approcher, à entrer dans la bulle de l'œuvre. C'est un moment de contemplation silencieuse, un tête-à-tête privilégié avec la toile.
        `,
        coverImage: "/images/gallery/minis/sunset2_cadre.jpg",
        date: "28 Avril 2026",
        category: "Collection",
        readingTime: "2 min"
    }
];
