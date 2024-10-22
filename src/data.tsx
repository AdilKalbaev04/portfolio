import { nanoid } from 'nanoid'

import { Skill } from './types'

export const about = [
  <>Hi there! My name is Adil Kalbaev, and I am a Full Stack developer with over 1.5 years of experience in the IT industry. I specialize in developing and implementing software solutions such as Laboratory Information Systems (LIS), Medical Information Systems (MIS), CRM systems, corporate websites, and landing pages.</>,
  <>  I have expertise in both frontend and backend development, using technologies such as JavaScript, PHP, React.js, Node.js, Laravel, and other modern frameworks. I am experienced in working with remote servers on Linux (Ubuntu), utilizing tools like PM2, Nginx, and Apache, and I am proficient in working with databases like MS SQL, MongoDB, and PostgreSQL.</>,
  <>In my work, I focus not only on writing high-quality code but also on optimizing application performance, configuring servers, and working with big data. I am always ready to tackle complex tasks and strive to continuously improve my software development skills.
  
  If you are looking for a professional who can provide comprehensive and flexible solutions for your business, I would be happy to collaborate!</>,
]

export const skills: { title: string; items: Skill[] }[] = [
  {
    title: 'BackEnd',
    items: [
      {
        id: nanoid(),
        name: 'Node JS, Express.js, NestJS, Java Spring boot, ASP.NET Core, Laravel,Docker, PM2, GIT',
        desc: 'BackEnd',
      },
      {
        id: nanoid(),
        name: 'PostgreSql, Microsoft SQL Server, MySQL',
        desc: 'Database',
      },
    ],
  },
  {
    title: 'Frontend',
    items: [
      {
        id: nanoid(),
        name: 'HTML, CSS, JS',
        desc: 'Basic technologies of any front-end developer.',
      },
      {
        id: nanoid(),
        name: 'React, TypeScript, Vue, Next.js',
        desc: 'Library and Frameworks',
      },
    ],
  },
]

export const portfolioLinks = [
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://github.com/AdilKalbaev04',
    hint: 'Examples of my code as a frontend and backend developer',
  },
]
