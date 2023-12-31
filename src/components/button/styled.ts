import styled, { css } from 'styled-components'

import ArrowWhite from '../../assets/icons/arrow-white.svg'
import Arrow from '../../assets/icons/arrow.svg'
import { Colors } from '../../styles/types'
import { MediaSizes } from '../../types'
import { media, MediaCreator } from '../../utils/devices'

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: ${Colors.main};
  z-index: -1;
`

export const StyledButton = styled.button`
  position: relative;
  padding-bottom: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 160%;
  font-size: 36px;
  text-align: left;

  ${MediaCreator(
    (msize: MediaSizes) => css`
      border-bottom: ${({ theme }) =>
        `${theme.thickness[msize]} solid ${Colors.webBlack}`};
    `
  )}

  & .arrow {
    background-image: url(${Arrow});
    width: 40px;
    height: 40px;
    background-size: contain;
    background-repeat: no-repeat;

    @media ${media.tabletM} {
      width: 3.6vw;
      height: 3.6vw;
    }
    @media ${media.desktop} {
      width: 3.6vw;
      height: 3.6vw;
    }
  }

  @media ${media.desktop} {
    font-size: 3vw;
  }
`

export const StyledButtonWhite = styled.button`
  position: relative;
  padding-bottom: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  text-transform: uppercase;
  font-weight: 300;
  line-height: 160%;
  font-size: 36px;
  text-align: left;

  ${MediaCreator(
    (msize: MediaSizes) => css`
      border-bottom: ${({ theme }) =>
        `${theme.thickness[msize]} solid ${Colors.webWhite}`};
    `
  )}

  & .arrow {
    background-image: url(${ArrowWhite});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    background-size: contain;

    @media ${media.tabletM} {
      width: 3.6vw;
      height: 3.6vw;
    }
    @media ${media.desktop} {
      width: 3.6vw;
      height: 3.6vw;
    }
  }

  @media ${media.desktop} {
    font-size: 3vw;
  }
`
