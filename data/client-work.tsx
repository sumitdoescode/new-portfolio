export interface ClientWork {
    id: number;
    name: string;
    description: string;
    image: string;
    liveLink?: string;
    pdfLink?: string;
}

export const clientWork: ClientWork[] = [
    {
        id: 1,
        name: "Knot Just Hair Salon",
        description: "Landing page designed for Knot Just Hair Salon in Tagore Garden, Delhi.",
        image: "/buildory/knot-just-hair/1.png",
        liveLink: "https://knotjusthair.in",
    },
    {
        id: 2,
        name: "Whatmind.in",
        description: "Landing page website designed and built for Whatmind.",
        image: "/buildory/whatmind/1.png",
        liveLink: "https://whatmind.in",
    },
    {
        id: 3,
        name: "Miles By Trip",
        description: "Website designed and developed for a car rental company.",
        image: "/buildory/miles-by-trip/1.png",
        pdfLink: "/buildory/miles-by-trip/main.pdf",
    },
];
