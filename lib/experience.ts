export interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string[];
    techStacks: string[];
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
      title: "Full Stack Developer Intern",
      company: "FirstList",
      duration: "Dec 2024 -- Present",
      location: "Remote",
      description: [
        "Developed and maintained a scalable backend using Node.js, Express, and MongoDB, integrating payment status upgradation for PhonePe and implementing PDF upload functionality to Amazon S3.",
        "Deployed backend services on Amazon EC2 with Nginx, ensuring high availability and performance for handling candidate and recruiter interactions.",
        "Worked on building and enhancing frontend features with React js to provide a responsive and user-friendly interface ."
      ],
      techStacks: ["Node.js", "Express.js", "MongoDB", "Amazon S3", "Amazon EC2", "React.js", "Nginx"]
    },
  
  ];
  