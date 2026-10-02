export type Stop = {
    type: "Projects" | "Milestone";
    date: string;
    title: string;
    description: string;
    tags?: string[];
    github?: string;
    demo?: string;
    current?: boolean;
};

export const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? ""

export const journey: Stop[] = [
    {
        type: "Milestone",
        date: "September 2024",
        title: "Started My Computer Science Journey",
        description: "Binus University is where i start my computer science journey",
        tags: ["Binus University", "Computer Science"],
    },

    {
        type: "Projects",
        date: "December 2025",
        title: "Growth Forecaster",
        description: "The First Project that i created and its for AI Subject, used data from kaggle to train a model that could create a website that can predict whether their child(s) could potentially get stunting or no",
        tags: ["Machine Learning", "Python", "Html"],
        github: "https://github.com/Vy-ak/Artificial-Intelligence",
    },

    {
        type: "Projects",
        date: "June 2026",
        title: "MapScore",
        description: "The WebApp final project for the Subject Software Engineer and Software Architecture",
        tags: ["Nextjs", "TypeScript", "PostGreSQL"],
        github: "https://github.com/Vy-ak/MapScore",
        demo: "https://map-score.vercel.app/"
    },
    
    {
        type: "Projects",
        date: "June 2026",
        title: "CT Media",
        description: "A Discord Bot for the community 'Cosplay Thieves' ",
        tags: ["JavaScript", "Discord", "MySQL"],
        current: true
    },

    {
        type: "Projects",
        date: "June 2026",
        title: "CT Officer",
        description: "A Discord Bot for the community 'Cosplay Thieves' this one acts like a security for the server",
        tags: ["JavaScript", "Discord", "MySQL"],
        current: true
    },

        {
        type: "Projects",
        date: "July 2026",
        title: "Bks SMPIT Alfityan Tangerang",
        description: "My First Project that i have to deal with customer, i have to convince all the parent that a website for the traditional Yearbook is more reliable",
        tags: ["JavaScript", "Css", "Html"],
    },

    {
        type: "Projects",
        date: "September 2026",
        title: "CT Dashboard",
        description: "A Website that acts like a dashboard for all the staff of the community",
        tags: ["Nextjs", "PostGreSQL", "TypeScript"],
        demo:"https://www.cosplaythieves.com/",
        current: true
    },
]