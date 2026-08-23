import { galleryPageItems } from "@/data/gallery";

export const artworks = galleryPageItems;

export const collections = artworks.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
}, {} as Record<string, typeof artworks>);

export const collectionNames = Object.keys(collections);

export const collectionColors: Record<string, string> = {
    "saisons": "#8C9C8A", 
    "linogravures": "#D6C5B3", 
    "minis": "#D8A48F", 
    "personnalites": "#5C6B73", 
    "religieux": "#A44A3F", 
};

export const displayNames: Record<string, string> = {
    "saisons": "Saisons",
    "linogravures": "Linogravures",
    "minis": "Les Minis",
    "personnalites": "Personnalités",
    "religieux": "Religieux",
};

export const globalMovement = { forward: false, backward: false, left: false, right: false };
