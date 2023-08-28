import { nanoid } from 'nanoid'

import { Skill } from './types'

export const about = [
  <>Hi there! I’m Adil, and I’m FullStack developer.</>,
  <>I am Best Programmer in the world </>,
  <>I say again, I am best programmer in the world</>,
]

export const skills: { title: string; items: Skill[] }[] = [
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
        name: 'React + Redux + TypeScript + Vue',
        desc: 'FrontEnd',
      },
    ],
  },
  {
    title: 'BackEnd',
    items: [
      {
        id: nanoid(),
        name: 'Node JS',
        desc: 'BackEnd',
      },
      {
        id: nanoid(),
        name: 'PostgreSql',
        desc: 'Database',
      },
    ],
  },
]

export const portfolioLinks = [
  {
    id: nanoid(),
    name: 'Github',
    link: 'https://github.com/AdilKalbaev04',
    hint: 'Examples of my code as a front-end developer',
  },
]
