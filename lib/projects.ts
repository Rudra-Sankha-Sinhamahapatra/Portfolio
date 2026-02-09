export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  image?: string;
  techStacks: string[];
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 'encorp-ai',
    image: "https://pbs.twimg.com/media/G3iNa8WXEAAYwDo?format=jpg&name=medium",
    title: "Encorp AI",
    description: "Encorp AI is an AI-powered slide generator that takes user input prompts and generates structured presentations using Gemini AI. It supports both PDF and PPT export functionalities.",
    link: "https://github.com/Rudra-Sankha-Sinhamahapatra/Encorp-AI",
    liveLink: "https://encorp.rudrasankha.com/",
    techStacks: ["Next.js", "React.js", "Tailwind Css", "Golang", "Typescript", "Redis", "Node Js", "Gemini", "Express Js", "Prisma", "PostgreSQL", "Jspdf", "PPTGenx"],
  },
  {
    id: 'better-uptime',
    image: "https://pbs.twimg.com/media/GyYSklPa4AI7p4g?format=jpg&name=4096x4096",
    title: "BetterUptime",
    description: "BetterUptime is a website monitoring platform that tracks the uptime and response times of websites. It provides real-time dashboards, downtime/recovery alerts via email, and secure authentication using Better Auth (Google OAuth).",
    link: "https://github.com/Rudra-Sankha-Sinhamahapatra/Better-Uptime",
    liveLink: "https://better-uptime.rudrasankha.com",
    techStacks: ["Next.js", "React.js", "RabbitMQ", "Redis", "PostgreSQL", "Prisma", "Better Auth", "Nodemailer", "Turborepo"]
  },
  {
    id: 'w8w',
    image: "https://pbs.twimg.com/media/G3iOGiKWwAEjM_5?format=jpg&name=medium",
    title: "W8W",
    description: "W8W is a powerful workflow automation platform like n8n for modern teams.It lets you connect triggers (like webhooks) to actions (like Gemini, ResendEmail, Telegram, w8w forms etc.) and automate tasks visually.",
    link: "https://github.com/Rudra-Sankha-Sinhamahapatra/w8w",
    liveLink: "https://s30w8w.rudrasankha.com/",
    techStacks: ["React.js", "Tailwind Css", "Typescript", "PostgreSQL", "Langchain", "Prisma", "Zustand", "Tanstack Query", "Redis", "Web Sockets"]
  },
  {
    id: 'adda-ai',
    image: "https://pbs.twimg.com/media/GsOgLBFakAADqiD?format=jpg&name=4096x4096",
    title: "Adda AI",
    description: "Adda AI is an AI-powered companion app that allows users to chat with AI characters with different personalities and get answers to their questions.The Ai characters remembers the conversation and can answer questions based on the conversation.",
    link: "https://github.com/Rudra-Sankha-Sinhamahapatra/adda-ai",
    liveLink: "https://adda-ai.rudrasankha.com",
    techStacks: ["TurboRepo", "Next.js", "React.js", "Tailwind Css", "Vercel AI SDK", "Zustand", "Supabase", "Typescript", "Nest Js", "Gemini", "Prisma", "PostgreSQL", "Vector DB"],
  },
  {
   id: 'trading-pro',
   image: "https://pbs.twimg.com/media/G3iPhzkXQAA02Cf?format=jpg&name=medium",
   title: "TradingPro",
   description: "TradingPro is a trading platform like exness where you can trade with SOL,ETH or BTC",
   link: "https://github.com/Rudra-Sankha-Sinhamahapatra/Exness-V2",
   liveLink: "https://tradings30.rudrasankha.com",
   techStacks: ["Next.js","React.js","Tailwind Css","Bun.js", "Redis", "PostgreSQL", "Prisma"]
  },
  {
    id: 'xemen',
    image: "https://pbs.twimg.com/media/GsOZ_82aEAAuraE?format=jpg&name=4096x4096",
    title: "Xemen",
    description:
      "Our app is an eCommerce platform built on top of Solana. It utilizes Solana for efficient and secure transactions on the blockchain.",
    link: "https://github.com/Ayushjodd/Xemen",
    liveLink: "https://xemen.vercel.app/",
    techStacks: ["Solana", "Next.js", "Next Auth", "React.js", "Tailwind Css", "Prisma ORM", "PostgreSQL"],
  },
  {
    id: 'bodhi',
    image: "https://pbs.twimg.com/media/GsOar_Oa4AIFI8_?format=jpg&name=4096x4096",
    title: "Bodhi",
    description:
      "Bodhi is a decentralized application that provides seamless access to advanced AI models with a pay-as-you-go policy on the Ethereum ecosystem.",
    link: "https://github.com/axatbhardwaj/bodhi",
    liveLink: "https://bodhi-pi.vercel.app/",
    techStacks: ["Ethereum", "Wagmi", "Turborepo", "Next.js", "React.js", "Tailwind Css", "Node Js", "Gemini", "Solidity", "Prisma", "PostgreSQL"],
  },
  {
    id: 'wiz',
    image: "https://pbs.twimg.com/media/GsOa20paMAEr_g1?format=jpg&name=4096x4096",
    title: "Wiz",
    description: "Wiz is a chat application built using web sockets and next js,Users can create or join a room to initiate chatting",
    link: "https://github.com/Rudra-Sankha-Sinhamahapatra/Wiz",
    liveLink: "https://wiz-five.vercel.app/",
    techStacks: ["Web Sockets", "Node.js", "Next.js", "React.js", "Tailwind Css"]
  }
];
