import React, { useState, useContext, memo } from 'react'
import { ThemeContext } from 'styled-components'
import styled from 'styled-components'
import BoxLineComponent from './BoxLine'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Lenguage from '../Lenguage'

const Header = memo(() => {
  const theme = useContext(ThemeContext)
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [affterlimit, setaffterlimit] = useState(false)

  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const Limit = (vh / 10) * 9
      const isDown = currPos.y < prevPos.y
      const execcedLimit = Math.abs(currPos.y) > Limit

      if (isDown !== isScrolledDown) setIsScrolledDown(isDown)
      if (execcedLimit !== affterlimit) setaffterlimit(execcedLimit)
    },
    [isScrolledDown],
    false,
    false,
    300
  )

  return (
    <HeaderContainer>
      <Container theme={theme} affterlimit={affterlimit}>
        <Lenguage affterlimit={affterlimit} />
        <BoxLineComponent affterlimit={!affterlimit} />
      </Container>
    </HeaderContainer>
  )
})

const HeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  z-index: 1;
  top: 0;
  transition: all 400ms ease;

  & > * {
    pointer-events: auto;
  }
`

const Container = styled.div`
  background-color: ${({ affterlimit, theme }) =>
    affterlimit ? theme.colors.white : 'transparent'};
  transition: all 400ms ease;
`

export default Header
