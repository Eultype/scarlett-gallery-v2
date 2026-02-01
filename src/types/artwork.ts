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
