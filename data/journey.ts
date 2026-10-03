export type Stop = {
    type: "Projects" | "Milestone" | "Experience" | "Organization";
    date: string;
    title: string;
    description: string;
    tags?: string[];
    github?: string;
    demo?: string;
    link?: string;
    linkLabel?: string;
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

export const experiences: Stop[] = [
    {
        type: "Organization",
        date: "September 2022 — September 2023",
        title: "Programming Division Manager — IT Doeta",
        description: "Led the programming division of the IT Doeta extracurricular. Managed division activities and mentored members in programming.",
        tags: ["Organization", "Leadership", "Programming", "IT Doeta"],
    },
    {
        type: "Organization",
        date: "January 2025 — March 2026",
        title: "BNCC — LnT Activist",
        description: "Activist in the Learning and Training (LnT) division at BNCC. Assisted in training sessions and organizational activities.",
        tags: ["BNCC", "Learning and Training", "Organization"],
    },
    {
        type: "Experience",
        date: "24 — 25 November 2025",
        title: "Teaching Assistant — Swift Workshop @ Al Azhar Bintaro",
        description: "Freelance teaching assistant for a Swift workshop for students. Helped participants follow the material and finish their assignments.",
        tags: ["Freelance", "Teaching Assistant", "Swift", "Al Azhar Bintaro"],
        link: "https://www.instagram.com/usn_vy/p/DU0OQ0jkgZJ/",
        linkLabel: "Instagram post",
    },
    {
        type: "Experience",
        date: "31 January 2026",
        title: "Teaching Assistant — Swift Workshop @ Al Azhar 19 Bekasi",
        description: "Freelance teaching assistant for a Swift workshop for students. Helped participants follow the material and finish their assignments.",
        tags: ["Freelance", "Teaching Assistant", "Swift", "Al Azhar Bekasi"],
        link: "https://www.instagram.com/usn_vy/p/DUzBSCDE7TB/",
        linkLabel: "Instagram post",
    },
    {
        type: "Organization",
        date: "April 2026 — Present",
        title: "BNCC — LnT Staff",
        description: "Staff in the Learning and Training (LnT) division at BNCC. Responsible for running training programs and developing learning materials.",
        tags: ["BNCC", "Learning and Training", "Organization"],
        current: true,
    },
    {
        type: "Organization",
        date: "June 2026 — Present",
        title: "Cosplay Thieves — Developer",
        description: "Maintain community systems: CT Media and CT Officer Discord bots plus the CT Dashboard for staff operations.",
        tags: ["Community", "Discord", "Next.js"],
        current: true,
    },
    {
        type: "Experience",
        date: "July 2026",
        title: "Freelance Web Developer — BKS SMPIT Alfityan Tangerang",
        description: "Worked directly with customers to ship a digital yearbook website, convincing parents that a web-based yearbook is more reliable than print.",
        tags: ["Freelance", "JavaScript", "Client Work"],
    },
    {
        type: "Experience",
        date: "22 September 2026",
        title: "Teaching Assistant — Swift Workshop @ Al Azhar Bintaro",
        description: "Freelance teaching assistant for a Swift workshop for teachers. Ensured everyone completed the workshop assignment and helped everyone understand what was happening.",
        tags: ["Freelance", "Teaching Assistant", "Swift", "Al Azhar Bintaro"],
        link: "https://www.instagram.com/usn_vy/p/Ddl1-tVn505/",
        linkLabel: "Instagram post",
    },
];