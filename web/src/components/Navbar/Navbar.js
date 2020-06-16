import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
import { styled } from 'baseui'
import { routes } from '@redwoodjs/router'

import LogoImg from 'src/assets/images/logo.svg'

import { NavLink } from './style'

const Logo = styled(LogoImg, {
  background: 'black',
  width: '140px',
  height: '50px',
})

const Navbar = () => {
  return (
    <HeaderNavigation
      overrides={{
        Root: {
          style: {
            paddingRight: '24px',
          },
        },
      }}
    >
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <Logo />
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <NavLink to={routes.logIn()}>Log In</NavLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <NavLink to={routes.signUp()}>Sign Up</NavLink>
        </StyledNavigationItem>
      </StyledNavigationList>

      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          {/* <Link to={routes.user()}>
            <Button>Get Started</Button>
          </Link> */}
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  )
}

export default Navbar
