import { Artwork } from "@/types/artwork";

export const galleryPageItems: Artwork[] = [
    // === COLONNE 1 ===
    {
        id: "s1",
        title: "Blindspring",
        description: "Une allégorie du renouveau printanier où le regard s'éclipse derrière la puissance végétale. Enveloppé d'une douce lumière matinale, le visage couronné de pivoines et de glycines, dont on peut imaginer le parfum, célèbre l'éveil de la nature.",
        category: "saisons",
        image: "/images/hero/printempsHD.webp",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        variants: [
            {
                name: "40x50cm (originale)",
                images: [
                    "/images/gallery/saisons/printemps/printempsHD.webp",
                    "/images/gallery/saisons/printemps/printemps_chevalet.webp",
                    "/images/gallery/saisons/printemps/printemps_zoom_1.webp",
                    "/images/gallery/saisons/printemps/printemps_zoom_2.webp",
                    "/videos/printemps_video.mp4"
                ]
            },
            {
                name: "40x50cm (print)",
                images: [
                    "/images/gallery/saisons/printemps/print_printemps.webp",
                    "/images/gallery/saisons/printemps/printemps_print_zoom.webp",
                    "/images/gallery/saisons/printemps/printemps_print_env.webp"
                ]
            },
            {
                name: "15x21cm (carte postale)",
                images: [
                    "/images/gallery/saisons/printemps/CP_printemps_2.webp",
                    "/images/gallery/saisons/printemps/CP_printemps_zoom.webp",
                    "/images/gallery/saisons/CP_all_saison.webp"
                ]
            }
        ]
    },
    {
        id: "l7",
        title: "Seville",
        description: "Une composition chaleureuse et lumineuse célébrant la douceur de vivre andalouse. Les branches d'orangers chargées de fruits éclatants se découpent élégamment devant une arche mauresque aux tonalités ocre doré, évoquant avec fraîcheur et poésie l'âme parfumée des patios sévillans.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_seville_cadre.jpg",
        dimensions: "Linogravure - 14,8x21cm (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "14,8x21cm (A5)",
        moreImages: ["/images/gallery/linogravures/lino_seville_zoom.webp"]
    },
    {
        id: "m8",
        title: "Last Ray",
        description: "L’incandescence du soleil capturé par une formation nuageuse dense, symbolisant la dualité entre la tempête et le puissance de la lumière. Encadrée d'un noir profond qui souligne le contraste avec la douceur du bleu-gris du ciel et de l’orange iridescent, d’un un dernier souffle lumineux avant le crépuscule.",
        category: "minis",
        image: "/images/gallery/minis/sunset2_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 16x21cm",
        moreImages: ["/images/gallery/minis/sunset2_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "l1",
        title: "4 saisons",
        description: "Une composition graphique et épurée où le noir et blanc sculpte la métamorphose du vivant. Divisée en quatre fenêtres géométriques, l'œuvre fait dialoguer les arabesques végétales et la rigueur des lignes, symbolisant l'harmonie et la continuité du cycle saisonnier.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_4saisons2_cadre.jpg",
        dimensions: "Linogravure - 21x29,7cm (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "21x29,7cm (A4)",
        moreImages: [
            "/images/gallery/linogravures/lino_4saisons_mur.webp",
            "/images/gallery/linogravures/lino_4saisons_zoom.webp"
        ]
    },
    {
        id: "m10",
        title: "Le Parfum des Fleurs",
        description: "Une composition florale intimiste aux tonalités chaudes et poudrées. Dans un jeu d'ombres douces et de touches vibrantes, une corolle carmin ondulante dialogue avec des fleurs aux nuances d'ocre et d'ivoire, capturant avec poésie la sensualité des pétales, la richesse des textures et le souffle délicat d'un bouquet secret.",
        category: "minis",
        image: "/images/gallery/minis/le_parfum_des_fleurs_cadre.webp",
        dimensions: "Huile sur toile encadrée - 15x15cm",
        serie: "Série \"Les Minis\" - 2025/2026",
        availableSizes: "Huile sur toile encadrée - 15x15cm",
        moreImages: ["/images/gallery/minis/le_parfum_des_fleurs-v2_zoom.webp"]
    },
    {
        id: "p1",
        title: "Cupid Olly",
        description: "Une réinterprétation mythologique et contemporaine de la figure de Cupidon à travers les traits d'Olly Alexander. Se découpant sur un crépuscule flamboyant, le corps ailé bandant son arc allie la tension du geste à une grâce vulnérable, incarnant la puissance passionnée et insaisissable du désir.",
        category: "personnalites",
        image: "/images/gallery/personnalites/Cupid-olly_cadre.webp",
        dimensions: "Huile sur toile originale - 60x60cm",
        serie: "Série \"Personnalités\" - 2024/2025",
        availableSizes: "60x60cm (originale)",
        moreImages: ["/images/gallery/personnalites/olly_zoom.webp", "/images/gallery/personnalites/Cupid-olly_chevalet.webp", "/images/gallery/personnalites/Cupid-olly_env.webp", "/videos/cupid-olly_video.mp4"],
    },
    {
        id: "m4",
        title: "Divine Light",
        description: "Fendant la masse dense et tourmentée des nuages d'ardoise, des faisceaux dorés irradient la composition en diagonale, incarnant la percée de l'espérance, la sérénité et le triomphe de la lumière sur l'obscurité.",
        category: "minis",
        image: "/images/gallery/minis/sunset_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 16x21cm",
        moreImages: ["/images/gallery/minis/sunset_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m2",
        title: "Storm",
        description: "Une étude céleste saisissante capturant la puissance dramatique des éléments. Entre la masse dense d'un bleu nuit orageux et les lueurs dorées qui percent la nuée, l'œuvre saisit l'instant suspendu où la lumière résiste à la tourmente, incarnant la beauté brute et l'intensité du ciel en mutation.",
        category: "minis",
        image: "/images/gallery/minis/storm_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 13x18cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 13x18cm",
        moreImages: ["/images/gallery/minis/storm_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "s2",
        title: "Blindsummer",
        description: "Une célébration vibrante de la plénitude estivale. Immergé dans un vert émeraude saturé, ce portrait aux yeux clos incarne une sérénité profonde, presque méditative. L'éclosion luxuriante de marguerites, de pivoines blanches et de fleurs jaunes, combinée aux ombres portées du feuillage sur la peau, fusionne le visage avec la nature, capturant la chaleur et l'abondance de la saison.",
        category: "saisons",
        image: "/images/hero/eteHD.webp",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        variants: [
            {
                name: "40x50cm (originale)",
                images: [
                    "/images/gallery/saisons/ete/eteHD.webp",
                    "/images/gallery/saisons/ete/ete_chevalet.webp",
                    "/images/gallery/saisons/ete/ete_chevalet_2.webp",
                    "/images/gallery/saisons/ete/ete_zoom_1.webp",
                    "/videos/ete_video.mp4"
                ]
            },
            {
                name: "40x50cm (print)",
                images: [
                    "/images/gallery/saisons/ete/print_ete.webp",
                    "/images/gallery/saisons/ete/ete_print_zoom.webp",
                    "/images/gallery/saisons/ete/ete_print_env.webp"
                ]
            },
            {
                name: "15x21cm (carte postale)",
                images: [
                    "/images/gallery/saisons/ete/CP_ete_2.webp",
                    "/images/gallery/saisons/ete/CP_ete_zoom.webp",
                    "/images/gallery/saisons/CP_all_saison.webp"
                ]
            }
        ]
    },
    {
        id: "m7",
        title: "Sun Touching",
        description: "Émergeant d'un faisceau d'ombres douces, la main tendue s'illumine au contact d'un rayon solaire ardent, capturant la translucidité de la peau, la quête de chaleur et la poésie d'un instant fugace.",
        category: "minis",
        image: "/images/gallery/minis/suntouching_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 16x21cm",
        moreImages: ["/images/gallery/minis/suntouching-zoom.webp"]
    },
    // === COLONNE 2 ===
    {
        id: "p5",
        title: "Blue Billie",
        description: "Une immersion monochrome dans l'intimité et la vulnérabilité de Billie Eilish. Baigné d'un bleu profond et hypnotique, le portrait met en lumière l'intensité cristalline de son regard levé vers la clarté, capturant avec émotion la mélancolie brute, la ferveur et l'âme suspendue de sa musique.",
        category: "personnalites",
        image: "/images/gallery/personnalites/blue_billie.webp",
        dimensions: "Huile sur toile originale - 30x30cm",
        serie: "Série \"Personnalités\" - 2025/2026",
        availableSizes: "30x30cm (originale)",
        moreImages: [
            "/images/gallery/personnalites/blue_billie_zoom.webp",
            "/images/gallery/personnalites/blue_billie_chevalet.webp",
            "/images/gallery/personnalites/blue_billie_env.webp"
        , "/videos/blue_billie_video.mp4"]
    },
    {
        id: "m15",
        title: "Medaillons",
        description: "Une ouverture poétique sur l'immensité du ciel, délicatement sertie dans son médaillon ovale. Au crépuscule, lorsque l'azur se voile de tendres reflets rosés, un vol d'oiseaux s'élance à travers les nuées légères, offrant un instant d'évasion pure, de calme et de grâce suspendue.",
        category: "minis",
        image: "/images/gallery/minis/medaillons_1_cadre.webp",
        dimensions: "Huile sur toile encadrée - 20,5x15,5cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 20,5x15,5cm",
        moreImages: ["/images/gallery/minis/medaillons_1_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "r1",
        title: "Mater Dei Orans",
        description: "Une représentation classique et solennelle de la Vierge Marie en prière. Les mains délicatement croisées sur le cœur et le visage baigné d'une clarté divine, la figure mariale se détache d'un ciel tourmenté dans une posture d'abandon spirituel, incarnant la pureté, la dévotion et la paix intérieure de la foi.",
        category: "religieux",
        image: "/images/gallery/religieux/Mater-dei-orans_cadre.jpg",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Religieux\" - 2024/2025",
        availableSizes: "40x50cm (originale)",
        moreImages: ["/images/gallery/religieux/mater_zoom.webp", "/images/gallery/religieux/Mater-dei-orans_chevalet.webp"],
        status: "Vendu"
    },
    {
        id: "m14",
        title: "Sous la Cime",
        description: "Une perspective contemplative et apaisante tournée vers les hauteurs sylvestres. À travers les entrelacs délicats des branches et la fraîcheur d'un feuillage vert vibrant, l'œuvre invite le regard à s'élever vers la clarté du ciel, capturant la quiétude d'une halte sous la canopée, la transparence de l'air et la respiration sereine de la nature.",
        category: "minis",
        image: "/images/gallery/minis/sous_la_cime_cadre.webp",
        dimensions: "Huile sur toile encadrée - 11x13cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 11x13cm",
        moreImages: ["/images/gallery/minis/sous_la_cime-v2_zoom.webp", "/images/gallery/minis/sous_la_cime-v2_env.webp"],
        status: "Vendu"
    },
    {
        id: "l4",
        title: "Antique II",
        description: "Une composition graphique en noir et blanc alliant l'esthétique classique au surréalisme botanique. Le buste antique aux traits finement hachurés s'efface sous un feuillage dense et une corolle éclose, occultant le regard pour évoquer la pensée intérieure, l'éveil poétique et la métamorphose végétale.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_antique2_cadre.jpg",
        dimensions: "Linogravure - 14,8x21cm (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "14,8x21cm (A5)",
        moreImages: [
            "/images/gallery/linogravures/lino_antique2_zoom.webp",
            "/images/gallery/linogravures/lino_antique2_env.webp"
        ]
    },
    {
        id: "m9",
        title: "Lueur sur Mer",
        description: "Une marine puissante et atmosphérique où le tumulte des flots rencontre la quiétude céleste. Dans un camaïeu de gris ardoise et de bleus profonds, les crêtes écumeuses des vagues se dressent sous un ciel tourmenté, tandis qu'une lueur pâle et mystérieuse perce la nuit pour se refléter à la surface de l'eau, incarnant la force brute de l'océan et la promesse d'un apaisement.",
        category: "minis",
        image: "/images/gallery/minis/lueur_sur_mer_cadre.webp",
        dimensions: "Huile sur toile encadrée - 34x28,5cm",
        serie: "Série \"Les Minis\" - 2025/2026",
        availableSizes: "Huile sur toile encadrée - 34x28,5cm",
        moreImages: ["/images/gallery/minis/lueur_sur_mer_zoom.webp", "/images/gallery/minis/lueur sur mer decor.webp"],
        status: "Vendu"
    },

    {
        id: "r3",
        title: "La Cene",
        description: "Une réinterprétation onirique et vaporeuse du chef-d'œuvre sacré. Flottant dans une atmosphère éthérée aux nuances d'émeraude et de turquoise, la scène rassemble le Christ et ses apôtres autour d'une table immaculée et dépouillée, mêlant la solennité du dernier repas à une dimension céleste et intemporelle.",
        category: "religieux",
        image: "/images/gallery/religieux/la_cene.webp",
        dimensions: "Huile sur toile originale - 100x70cm",
        serie: "Série \"Religieux\" - 2025/2026",
        availableSizes: "100x70cm (originale)",
        moreImages: ["/images/gallery/religieux/la_cene_chevalet.webp", "/videos/la_cene_video.mp4"],
        status: "Vendu"
    },

    // === COLONNE 3 ===
    {
        id: "l6",
        title: "Cyclades",
        description: "Une escapade graphique et lumineuse au cœur de l'archipel grec. Jouant sur un camaïeu de bleus intenses et la pureté du blanc, l'estampe associe l'architecture épurée d'une ruelle à une jarre traditionnelle et à l'œil protecteur (matiasma), évoquant avec douceur la quiétude et la magie méditerranéenne.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_cyclades_cadre.jpg",
        dimensions: "Linogravure - 14,8x21cm (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "14,8x21cm (A5)",
        moreImages: [
            "/images/gallery/linogravures/lino_cyclades_zoom.webp",
            "/images/gallery/linogravures/lino_cyclades_env.webp"
        ]
    },
    {
        id: "l2",
        title: "Saint Graal",
        description: "Une estampe sacrée au contraste saisissant, inscrite sous une arche solennelle. Le calice ornementé soutient une hostie rayonnante, capturant dans un jeu d'ombre et de lumière brute la puissance mystique et la dimension divine de l'eucharistie.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_stgraal_cadre.jpg",
        dimensions: "Linogravure - 21x29,7cm (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "21x29,7cm (A4)",
        moreImages: [
            "/images/gallery/linogravures/lino_stgraal_mur.webp",
            "/images/gallery/linogravures/lino_saint_graal_zoom.webp"
        ]
    },
    {
        id: "m5",
        title: "Hope",
        description: "Une évocation poétique et vaporeuse de la renaissance végétale. Au cœur d'un halo lumineux mêlant vert tendre et jaune solaire, de délicates silhouettes de feuilles semblent flotter dans la brume, incarnant la douceur, la respiration de la nature et l'élan serein du renouveau.",
        category: "minis",
        image: "/images/gallery/minis/vert_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 13x18cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 13x18cm",
        moreImages: ["/images/gallery/minis/vert_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m3",
        title: "Suncatching",
        description: "Une composition intimiste et poétique explorant la délicatesse du geste et le mystère de la lumière. Baignées de tons ambrés et chaleureux, les mains s'unissent pour capturer l'étincelle fragile d'un rayon de soleil, symbolisant l'espoir, l'éphémère et la grâce d'un instant suspendu.",
        category: "minis",
        image: "/images/gallery/minis/suncatching_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 16x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 16x21cm",
        moreImages: ["/images/gallery/minis/suncatching_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m6",
        title: "Peaceful Forest",
        description: "Une immersion intime et contemplative au cœur d'un sous-bois enchanté. Traversant la pénombre feutrée des grands arbres, un éclat de lumière solaire vient illuminer une jeune pousse fragile émergeant de la mousse, capturant la sérénité du silence, l'élan vital de la nature et la magie d'un instant suspendu.",
        category: "minis",
        image: "/images/gallery/minis/plante_cadre.jpg",
        dimensions: "Huile sur toile encadrée - 13x18cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 13x18cm",
        moreImages: ["/images/gallery/minis/plante_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m12",
        title: "Les Mains de Mere Nature",
        description: "Une composition puissante et mystique célébrant le lien sacré entre le vivant et la lumière. Émergeant d'un écrin vaporeux de vert végétal et de brume sylvestre, deux mains tendues vers le ciel s'illuminent d'une lueur chaude et incandescente, incarnant l'offrande, la force nourricière de la terre et la transcendance de la nature.",
        category: "minis",
        image: "/images/gallery/minis/les_mains_de_mere_nature_cadre.webp",
        dimensions: "Huile sur toile encadrée - 26x19cm",
        serie: "Série \"Les Minis\" - 2025/2026",
        availableSizes: "Huile sur toile encadrée - 26x19cm",
        moreImages: ["/images/gallery/minis/les_mains_de_mere_nature-v2_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "r2",
        title: "Ave Maria",
        description: "Une scène sacrée empreinte d'une infinie tendresse maternelle. Émergeant d'un fond obscur par un délicat halo de lumière céleste, l'étreinte protectrice entre la Vierge Marie et l'Enfant endormi incarne la grâce, la sérénité et l'amour inconditionnel.",
        category: "religieux",
        image: "/images/gallery/religieux/Ave-maria_cadre.jpg",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Religieux\" - 2024/2025",
        availableSizes: "40x50cm (originale)",
        moreImages: ["/images/gallery/religieux/ave_zoom.webp", "/images/gallery/religieux/ave_maria_chevalet.webp"],
        status: "Vendu"
    },
    {
        id: "m16",
        title: "Medaillons II",
        description: "Une fenêtre lumineuse et apaisante sur la nature, délicatement sertie dans son médaillon ovale. Au-dessus de collines vallonnées aux nuances vert d'eau et de terre, un soleil doux diffuse sa clarté à travers des nuées teintées d'or et de rose poudré, capturant la quiétude d'une aube naissante et la poésie intemporelle du paysage.",
        category: "minis",
        image: "/images/gallery/minis/medaillons_2_cadre.webp",
        dimensions: "Huile sur toile encadrée - 20,5x15,5cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 20,5x15,5cm",
        moreImages: ["/images/gallery/minis/medaillons_2_zoom.webp"],
        status: "Vendu"
    },

    // === COLONNE 4 ===
    {
        id: "l8",
        title: "Sicile",
        description: "Une ode solaire et vibrante aux rivages méditerranéens. Baignée d'un jaune éclatant traversé de rayons lumineux, la branche de citronniers aux fruits généreux et au feuillage vert intense insuffle une énergie joyeuse, évoquant la chaleur, la vitalité et les vergers baignés de lumière de la Sicile.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_sicile_cadre.jpg",
        dimensions: "Linogravure - 14,8x21cm (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "14,8x21cm (A5)",
        moreImages: [
            "/images/gallery/linogravures/lino_sicile_zoom.webp",
            "/images/gallery/linogravures/lino_sicile_env.webp"
        ]
    },
    {
        id: "s4",
        title: "Blindwinter",
        description: "Une incarnation poétique du sommeil hivernal et de la pureté du gel. A l’heure où la nuit tombe, le visage rosé par le froid est orné d’une couronne de roses givrées, de branches de pin et de délicats perce-neiges, capturant la quiétude suspendue et la beauté cristalline de la saison froide.",
        category: "saisons",
        image: "/images/hero/hiverHD.webp",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        variants: [
            {
                name: "40x50cm (originale)",
                images: [
                    "/images/gallery/saisons/hiver/hiverHD.webp",
                    "/images/gallery/saisons/hiver/hiver_chevalet.webp",
                    "/images/gallery/saisons/hiver/hiver_zoom_1.webp",
                    "/images/gallery/saisons/hiver/hiver_zoom_2.webp",
                    "/videos/hiver_video.mp4"
                ]
            },
            {
                name: "40x50cm (print)",
                images: [
                    "/images/gallery/saisons/hiver/print_hiver.webp",
                    "/images/gallery/saisons/hiver/hiver_print_zoom.webp",
                    "/images/gallery/saisons/hiver/hiver_print_env.webp"
                ]
            },
            {
                name: "15x21cm (carte postale)",
                images: [
                    "/images/gallery/saisons/hiver/CP_hiver_2.webp",
                    "/images/gallery/saisons/hiver/CP_hiver_zoom.webp",
                    "/images/gallery/saisons/CP_all_saison.webp"
                ]
            }
        ]
    },
    {
        id: "l3",
        title: "Antique",
        description: "Une rencontre poétique entre héritage classique et vitalité organique. La silhouette épurée d'un buste antique fragmenté laisse jaillir en son cœur de délicates pousses vertes, symbolisant le triomphe de la nature, la mémoire intemporelle et le renouveau perpétuel de la matière.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_antique_cadre.jpg",
        dimensions: "Linogravure - 21x29,7cm (A4)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "21x29,7cm (A4)",
        moreImages: [
            "/images/gallery/linogravures/lino_antique_mur.webp",
            "/images/gallery/linogravures/lino_antique_zoom.webp"
        ]
    },
    {
        id: "p6",
        title: "Lady in Red",
        description: "Un hommage saisissant à l'aura théâtrale et avant-gardiste de Lady Gaga. Dans un écrin de nuances pourpres et carmin, le jeu de clair-obscur souligne le magnétisme de son regard et la blancheur tranchante de ses sourcils, mêlant force brute, glamour dramatique et présence iconique.",
        category: "personnalites",
        image: "/images/gallery/personnalites/lady_in_rend.webp",
        dimensions: "Huile sur toile originale - 30x30cm",
        serie: "Série \"Personnalités\" - 2025/2026",
        availableSizes: "30x30cm (originale)",
        moreImages: [
            "/images/gallery/personnalites/lady_in_rend_zoom.webp",
            "/images/gallery/personnalites/lady_in_red_chevalet.webp",
            "/images/gallery/personnalites/lady_in_red_env_2.webp"
        , "/videos/lady_in_the_red_video.mp4"]
    },
    {
        id: "l5",
        title: "Provence",
        description: "Une composition solaire et rythmée rendant hommage aux paysages du Sud. Les lignes de fuite d'un champ de lavande s'étirent vers un soleil levant éclatant, accompagnées au premier plan de brins délicats, pour capturer avec fraîcheur et simplicité la chaleur et la lumière de l'été méditerranéen.",
        category: "linogravures",
        image: "/images/gallery/linogravures/lino_provence_cadre.jpg",
        dimensions: "Linogravure - 14,8x21cm (A5)",
        serie: "Série \"Linogravures\" - 2024/2025",
        availableSizes: "14,8x21cm (A5)",
        moreImages: [
            "/images/gallery/linogravures/lino_provence_zoom.webp",
            "/images/gallery/linogravures/lino_provence_env.webp"
        ]
    },
    {
        id: "m13",
        title: "Cascade dans l'Orage",
        description: "Une composition dramatique et onirique à la frontière du ciel et de la terre. Fendant l'obscurité dense d'un ciel tourmenté, une cascade de lumière pure se déverse à la verticale pour venir embraser un lit de nuages d'orage, incarnant la puissance brute des éléments, le mystère céleste et la beauté d'une apparition lumineuse en pleine tempête.",
        category: "minis",
        image: "/images/gallery/minis/cascade_dans_lorage_cadre.webp",
        dimensions: "Huile sur toile encadrée - 35x28cm",
        serie: "Série \"Les Minis\" - 2025/2026",
        availableSizes: "Huile sur toile encadrée - 35x28cm",
        moreImages: ["/images/gallery/minis/cascade_dans_lorage_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m1",
        title: "Foggy Morning",
        description: "À travers un voile de brume et des nuances douces de terre et de cendre, un soleil d'or perce timidement pour venir caresser la surface de l'eau, capturant le calme suspendu et la mélancolie silencieuse de l'aube.",
        category: "minis",
        image: "/images/gallery/minis/brouillard.webp",
        dimensions: "Huile sur toile encadrée - 21x21cm",
        serie: "Série \"Les Minis\" - 2024/2025",
        availableSizes: "Huile sur toile encadrée - 21x21cm",
        moreImages: ["/images/gallery/minis/brouillard_zoom.webp"],
        status: "Vendu"
    },
    {
        id: "m11",
        title: "Le Parfum des Fleurs II",
        description: "Une immersion intime et sensorielle dans la volupté florale. Entre des pétales corail aux textures généreuses et des teintes poudrées se fondant dans un fondu vaporeux de rose et de violet doux, l'œuvre capture la délicatesse éphémère d'une corolle en éclosion et l'évocation subtile d'une fragrance suspendue dans l'air.",
        category: "minis",
        image: "/images/gallery/minis/le_parfum_des_fleurs_2_cadre.webp",
        dimensions: "Huile sur toile encadrée - 15x15cm",
        serie: "Série \"Les Minis\" - 2025/2026",
        availableSizes: "Huile sur toile encadrée - 15x15cm",
        moreImages: ["/images/gallery/minis/le_parfum_des_fleurs_2-v2_zoom.webp"]
    },
    {
        id: "p2",
        title: "Zendaya",
        description: "Un portrait saisissant capturant l'élégance audacieuse et le charisme magnétique de l'icône contemporaine Zendaya. Entre ombres subtiles et reflets dorés, l'intensité du regard se dévoile à travers une gestuelle ornée de bijoux précieux, incarnant force, grâce et modernité.",
        category: "personnalites",
        image: "/images/gallery/personnalites/Zendaya_cadre.jpg",
        dimensions: "Huile sur toile originale - 50x50cm",
        serie: "Série \"Personnalités\" - 2024/2025",
        availableSizes: "50x50cm (originale)",
        moreImages: ["/images/gallery/personnalites/zendaya_zoom.webp", "/images/gallery/personnalites/Zendaya_chevalet.webp", "/images/gallery/personnalites/Zendaya_env.webp"]
    },
    {
        id: "s3",
        title: "Blindfall",
        description: "Les branches de chêne aux teintes cuivrées et écarlates voilent délicatement le regard, tandis que de frêles champignons s'épanouissent le long du visage. Le vent dans les cheveux entremêlés dans les branches scellent une symbiose intime entre la figure féminine et le cycle immuable de la terre.",
        category: "saisons",
        image: "/images/gallery/saisons/automne/automneHD_2.webp",
        dimensions: "Huile sur toile originale - 40x50cm",
        serie: "Série \"Saisons\" - 2024/2025",
        variants: [
            {
                name: "40x50cm (originale)",
                images: [
                    "/images/gallery/saisons/automne/automneHD_2.webp",
                    "/images/gallery/saisons/automne/automne_chevalet.webp",
                    "/images/gallery/saisons/automne/automne_zoom_1.webp",
                    "/images/gallery/saisons/automne/automne_zoom_2.webp",
                    "/videos/automne_video.mp4"
                ]
            },
            {
                name: "40x50cm (print)",
                images: [
                    "/images/gallery/saisons/automne/print_automne.webp",
                    "/images/gallery/saisons/automne/automne_print_zoom.webp",
                    "/images/gallery/saisons/automne/automne_print_env.webp"
                ]
            },
            {
                name: "15x21cm (carte postale)",
                images: [
                    "/images/gallery/saisons/automne/CP_automne_2.webp",
                    "/images/gallery/saisons/automne/CP_automne_zoom.webp",
                    "/images/gallery/saisons/CP_all_saison.webp"
                ]
            }
        ]
    },
];