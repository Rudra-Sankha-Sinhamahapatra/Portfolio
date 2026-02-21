export interface PR {
  url: string;
  title: string;
}

export interface Experience {
    title: string;
    company: string;
    companyLogo:string;
    duration: string;
    location: string;
    description: string[];
    techStacks: string[];
    prs?: PR[];
  }
  
  export const keywords = [
    "Node.js",
    "Express",
    "MongoDB",
    "S3",
    "EC2",
    "React",
    "js",
    "Amazon",
    "Nginx",
    "scalable",
    "backend",
    "frontend",
    "payment",
    "PDF upload",
    "deployed",
  ];

  export const experiences: Experience[] = [
    {
      title: "Open Source Developer",
      company: "Wannabespace (Conar)",
      companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQEql42FV3Kk4Q/company-logo_200_200/B56Zst0aUeIEAI-/0/1766000273127/wannabe_school_logo?e=1773273600&v=beta&t=_OODdSGt-mhiDT0qPPYz5yideAFoZIZCwKTl8Gu3hP0",
      duration: "Nov 2025 - Present",
      location: "Kyiv,Ukraine (Remote)",
      description: [
        "Contributed to Conar, an open-source database client by Wannabespace, focusing on major enhancements and feature development.",
        "Successfully merged over 25+ PRs, significantly improving the platform's functionality and performance."
      ],
      techStacks: ["Electron", "React.js", "oRPC", "Hono", "Drizzle ORM", "Tanstack Query", "Better Auth", "AI SDK"],
      prs: [
        { title: "feat(desktop): adds indexes and constraints page (#269)", url: "https://github.com/wannabespace/conar/pull/269" },
        { title: "feat(connection): adds connection version (#318)", url: "https://github.com/wannabespace/conar/pull/318" },
        { title: "feat(schema): adds table schema & query copy (#275)", url: "https://github.com/wannabespace/conar/pull/275" }
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "FirstList",
      companyLogo:"data:image/jpeg;base64,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",
      duration: "Dec 2024 - Jun 2025",
      location: "Gurgaon, Haryana (Remote)",
      description: [
        "Developed and maintained a scalable backend using Node.js, Express, and MongoDB, integrating payment status upgradation for PhonePe and implementing PDF upload functionality to Amazon S3.",
        "Deployed backend services on Amazon EC2 with Nginx, ensuring high availability and performance for handling candidate and recruiter interactions.",
        "Worked on building and enhancing frontend features with React js to provide a responsive and user-friendly interface ."
      ],
      techStacks: ["Node.js", "Express.js", "MongoDB", "Amazon S3", "Amazon EC2", "React.js", "Nginx"]
    },
  
  ];
  