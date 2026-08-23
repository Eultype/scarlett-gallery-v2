export interface Artwork {
    id: string;
    title: string;
    description?: string;
    category: "saisons" | "personnalites" | "religieux" | "linogravures" | "minis";
    image: string;
    dimensions: string;
    serie: string;
    availableSizes?: string;
    moreImages?: string[];
    variants?: {
        name: string;
        images: string[];
    }[];
    status?: "Disponible" | "Vendu";
    layout?: "standard" | "wide";
}
