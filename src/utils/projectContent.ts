export type Display = {
    heading: string;
    title: string;
    description: string;
    image: {
        src: string;
        alt: string;
        height: string;
        width: string;
    };
    skills: string[];
    links: {
        text: string;
        href: string;
        target: string;
        type: string;
    }[];
};

export const workDisplays = [
    {
        heading: "Recent Project",
        title: "Dungeon Delvers Inc.",
        description: "A worldbuilding and campaign management tool for TTRPG’s. Created with Next.js, using Payload CMS for content management.",
        image: {
            src: "/castle.webp",
            alt: "Castle Icon",
            height: "159",
            width: "159",
        },
        skills: ["Next.js", "Payload", "TypeScript", "Leaflet.js", "Tailwind"],
        links: [
            {
                text: "Live Site",
                href: "https://dungeon-delvers-inc-payload.vercel.app/",
                target: "_self",
                type: "primary",
            },
            {
                text: "Summary",
                href: "/projects/dungeon-delvers-inc",
                target: "_self",
                type: "secondary",
            },
            {
                text: "Github Repo",
                href: "https://github.com/Dean-Baylem/dungeon-delvers-inc-payload",
                target: "_blank",
                type: "secondary",
            },
        ],
    },
    {
        heading: "Latest Experiment",
        title: "Campfire Scene",
        description:
            "Stylized 3D environment inspired by early web games. Built using a combination of Blender, React Three Fiber, and custom GLSL shaders.",
        image: {
            src: "/campfire.webp",
            alt: "Campfire Icon",
            height: "140",
            width: "159",
        },
        skills: ["React", "Three.js", "React Three Fiber", "GLSL", "Blender"],
        links: [
            {
                text: "Live Site",
                href: "https://druid-camp.netlify.app/",
                target: "_self",
                type: "primary",
            },
            // {
            //     text: "Summary",
            //     href: "/experiments/campfire-scene",
            //     target: "_self",
            //     type: "secondary",
            // },
            {
                text: "Github Repo",
                href: "https://github.com/Dean-Baylem/druid-camp",
                target: "_blank",
                type: "secondary",
            },
        ],
    },
];
