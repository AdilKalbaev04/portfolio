import { useRef } from 'react'

import { nanoid } from 'nanoid'

import Photo2 from '../../assets/img/117137974.jpeg'
import { useSmoothAppearance } from '../../hooks/useSmoothAppearance'
import {
  Btns,
  Container,
  FirstLine,
  FirstText,
  Gradient,
  LinkButton,
  StyledTgLink,
  Wrapper,
} from './styled'

const links = [
  {
    id: nanoid(),
    name: 'Telegram',
    link: 'https://t.me/adil_xXx',
  },
  {
    id: nanoid(),
    name: 'Email',
    link: 'adilkalbaev2004@gmail.com',
  },
]

const TgLink = () => (
  <StyledTgLink href="https://t.me/adil_xXx" target="_blank">
    Adil
  </StyledTgLink>
)

const title = 'Let’s communicate!'

export const ContactsBlock: React.FC = () => {
  const trigger = useRef() as React.MutableRefObject<HTMLDivElement>

  useSmoothAppearance(trigger, [
    { selector: '.title', direction: 'right' },
    { selector: '.desc', direction: 'left' },
    { selector: '.btns-1', direction: 'left' },
    { selector: '.btns-2', direction: 'left' },
    { selector: '.btns-3', direction: 'left' },
    { selector: 'img', direction: 'left' },
  ])

  return (
    <Container id="contacts-block" ref={trigger}>
      <Wrapper />
      <FirstLine>
        <FirstText>
          <Gradient />
          <h3 className="title">{title}</h3>
          <img alt="adil2" className="min-screen img2" src={Photo2} />
          <p className="desc">
            The fastest way I will answer you is in the telegram chat &#40;
            <TgLink />
            &#41;. But you can always write me an email
          </p>
        </FirstText>
        <img alt="adil2" className="max-screen" src={Photo2} />
      </FirstLine>
      <Btns>
        {links.map(({ id, name, link }, index) => (
          <LinkButton
            className={`btns-${index + 1}`}
            external
            key={id}
            link={link}
          >
            {name}
          </LinkButton>
        ))}
      </Btns>
    </Container>
  )
}
