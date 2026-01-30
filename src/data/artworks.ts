export interface Artwork {
    id: string;
    title: string;
    category: "saisons" | "personnalites" | "linogravures" | "minis";
    image: string;
    dimensions: string;
    serie: string;
    availableSizes?: string;
    moreImages?: string[];
}

export const homeGalleryItems: Artwork[] = [
    // --- SAISONS ---
    {
        id: "s1",
        title: "Blindspring",
        category: "saisons",
        image: "/images/gallery/saisons/printempsSD.webp",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original), 40x50cm (print), 15x21cm",
        moreImages: [
            "/images/gallery/saisons/print_printemps.png",
            "/images/gallery/saisons/CP_printemps.png"
        ]
    },
    {
        id: "s2",
        title: "Blindsummer",
        category: "saisons",
        image: "/images/gallery/saisons/eteSD.webp",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original), 40x50cm (print), 15x21cm",
        moreImages: [
            "/images/gallery/saisons/print_ete.png",
            "/images/gallery/saisons/CP_ete.png"
        ]
    },
    {
        id: "s3",
        title: "Blindwinter",
        category: "saisons",
        image: "/images/gallery/saisons/automneSD.webp",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original), 40x50cm (print), 15x21cm",
        moreImages: [
            "/images/gallery/saisons/print_automne.png",
            "/images/gallery/saisons/CP_automne.png"
        ]
    },
    {
        id: "s4",
        title: "Blindfall",
        category: "saisons",
        image: "/images/gallery/saisons/hiverSD.webp",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original), 40x50cm (print), 15x21cm",
        moreImages: [
            "/images/gallery/saisons/print_hiver.png",
            "/images/gallery/saisons/CP_hiver.png"
        ]
    },

    // --- PERSONNALITÉS ---
    {
        id: "p1",
        title: "Cupid Olly",
        category: "personnalites",
        image: "/images/gallery/personnalites/Cupid-olly.JPG",
        dimensions: "Huile sur toile - 60x60cm",
        serie: "Série \"Personnalités\" - 2024/2025",
        availableSizes: "Disponibles : 60x60cm (original)",
        moreImages: ["/images/gallery/personnalites/olly_zoom.jpg"]
    },
    {
        id: "p2",
        title: "Zendaya",
        category: "personnalites",
        image: "/images/gallery/personnalites/Zendaya.JPG",
        dimensions: "Huile sur toile - 50x50cm",
        serie: "Série \"Personnalités\" - 2024/2025",
        availableSizes: "Disponibles : 50x50cm (original)",
        moreImages: ["/images/gallery/personnalites/zendaya_zoom.jpg"]
    },
    {
        id: "p3",
        title: "Mater Dei Orans",
        category: "personnalites",
        image: "/images/gallery/personnalites/Mater-dei-orans.JPG",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Religieux\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original)",
        moreImages: ["/images/gallery/personnalites/mater_zoom.jpg"]
    },
    {
        id: "p4",
        title: "Ave Maria",
        category: "personnalites",
        image: "/images/gallery/personnalites/Ave-maria.JPG",
        dimensions: "Huile sur toile - 40x50cm",
        serie: "Série \"Religieux\" - 2024/2025",
        availableSizes: "Disponibles : 40x50cm (original)",
        moreImages: ["/images/gallery/personnalites/ave_zoom.jpg"]
    },

    // --- LINOGRAVURES ---
    {
        id: "l1",
        title: "4 saisons",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_4saisons2.jpg",
        dimensions: "Linogravure - 21x29,7 (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "Disponible : 21x29,7 (A4)",
        moreImages: ["/images/gallery/linogravures/lino_4saisons_mur.jpg"]
    },
    {
        id: "l2",
        title: "Saint Graal",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_stgraal.jpg",
        dimensions: "Linogravure - 21x29,7 (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "Disponible : 21x29,7 (A4)",
        moreImages: ["/images/gallery/linogravures/lino_stgraal_mur.jpg"]
    },
    {
        id: "l3",
        title: "Antique",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_antique.jpg",
        dimensions: "Linogravure - 21x29,7 (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "Disponible : 21x29,7 (A4)",
        moreImages: ["/images/gallery/linogravures/lino_antique_mur.JPEG"]
    },
    {
        id: "l4",
        title: "Sicile",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_sicile.jpg",
        dimensions: "Linogravure - 21x14,8 (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "Disponible : 21x14,8 (A5)"
    },

    // --- MINIS ---
    {
        id: "m1",
        title: "Foggy Morning",
        category: "minis",
        image: "/images/gallery/minis/brouillard.JPG",
        dimensions: "Huile sur toile - 21x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Disponibles : 21x21 - Cadre fourni avec"
    },
    {
        id: "m2",
        title: "Storm",
        category: "minis",
        image: "/images/gallery/minis/storm.JPG",
        dimensions: "Huile sur toile - 13x18cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Disponibles : 13x18 - Cadre fourni avec"
    },
    {
        id: "m3",
        title: "Suncatching",
        category: "minis",
        image: "/images/gallery/minis/suncatching.JPG",
        dimensions: "Huile sur toile - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Disponibles : 16x21 - Cadre fourni avec"
    },
    {
        id: "m4",
        title: "Divine Light",
        category: "minis",
        image: "/images/gallery/minis/sunset.JPG",
        dimensions: "Huile sur toile - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Disponibles : 16x21 - Cadre fourni avec"
    },
];
