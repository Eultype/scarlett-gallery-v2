export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    availability: {
        week: string;
        weekend: string;
    };
    socials: {
        instagram: string;
        facebook: string;
        tiktok: string;
        etsy: string;
        vinted: string;
    };
    formAction: string;
}
