import { skills } from "./skills";

export const getSkillIcon = (techName: string) => {
  const normalizedTechName = techName.toLowerCase().trim();
  
  let skill = skills.find(skill => 
    skill.name.toLowerCase() === normalizedTechName
  );
  
  if (!skill) {
    skill = skills.find((skill) => {
      const normalizedSkillName = skill.name.toLowerCase();
      const techNameNoDots = normalizedTechName.replace(/\./g, ' ');
      const skillNameNoDots = normalizedSkillName.replace(/\./g, ' ');
      
      return normalizedSkillName.includes(normalizedTechName) || 
             normalizedTechName.includes(normalizedSkillName) ||
             skillNameNoDots.includes(techNameNoDots) ||
             techNameNoDots.includes(skillNameNoDots);
    });
  }
  
  if (!skill) {
    const specialCases: { [key: string]: string | null } = {
      'next.js': 'Next Js',
      'next js': 'Next Js',
      'nextjs': 'Next Js',
      'react.js': 'React Js',
      'react js': 'React Js',
      'reactjs': 'React Js',
      'node.js': 'Node.js',
      'node js': 'Node.js',
      'nodejs': 'Node.js',
      'express.js': 'Express.js',
      'express js': 'Express.js',
      'expressjs': 'Express.js',
      'amazon ec2': "AWS",
      'amazon s3': "AWS",
      'nest.js': 'Nest.js',
      'nest js': 'Nest.js',
      'nestjs': 'Nest.js',
      'rabbitmq': 'RabbitMQ',
      'tailwind css': 'Tailwind Css',
      'tailwindcss': 'Tailwind Css',
      'mongo db': 'Mongo DB',
      'mongodb': 'Mongo DB',
      'postgresql': 'PostgreSQL',
      'postgres': 'PostgreSQL',
      'gemini': 'Google Gemini',
      'web sockets': 'Websockets',
      'websocket': 'Websockets',
      'turborepo': 'Turborepo',
      'prisma orm': 'Prisma',
      'next auth': null,
      'better auth': null,
      'jspdf': null,
      'pptgenx': null, 
      'nodemailer': null, 
      'wagmi': null,
      'solidity': null,  
      'vector db': null,
      'ethereum': null
    };
    
    const mappedSkillName = specialCases[normalizedTechName];
    console.log(`Mapped skill name: ${mappedSkillName}`);
    
    if (mappedSkillName) {
      skill = skills.find(s => s.name === mappedSkillName);
    }
  }
  
  console.log(`Found skill:`, skill);
  
  return skill ? { icon: skill.icon, width: skill.width, height: skill.height } : null;
};
