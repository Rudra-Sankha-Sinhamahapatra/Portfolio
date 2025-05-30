export interface Project {
    title: string;
    description: string;
    link: string;
    image?: string;
    techStacks: string[];
  }
  
  export const projects: Project[] = [
    {
      image:"https://pbs.twimg.com/media/GsOZ_82aEAAuraE?format=jpg&name=4096x4096",
      title: "Xemen",
      description:
        "Our app is an eCommerce platform built on top of Solana. It utilizes Solana for efficient and secure transactions on the blockchain.",
      link: "https://github.com/Ayushjodd/Xemen",
      techStacks: ["Solana", "Next Js", "Next Auth", "React Js", "Tailwind Css","Prisma ORM","PostgreSQL"],
    },
    {
      image:"https://pbs.twimg.com/media/GsOar_Oa4AIFI8_?format=jpg&name=4096x4096",
      title: "Bodhi",
      description:
        "Bodhi is a decentralized application that provides seamless access to advanced AI models with a pay-as-you-go policy on the Ethereum ecosystem.",
      link: "https://github.com/axatbhardwaj/bodhi",
      techStacks: ["Ethereum", "Wagmi", "Turborepo", "Next Js","React Js","Tailwind Css","Node Js","Gemini","Solidity","Prisma","PostgreSQL"],
    },
    {
      image:"https://pbs.twimg.com/media/GsOa20paMAEr_g1?format=jpg&name=4096x4096",
      title:"Wiz",
      description:"Wiz is a chat application built using web sockets and next js,Users can create or join a room to initiate chatting",
      link:"https://github.com/Rudra-Sankha-Sinhamahapatra/Wiz",
      techStacks:["Web Sockets","Node.js","Next Js","React Js","Tailwind Css"]
    }
  ];
  