import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation'
import { StyledLink } from 'baseui/link'
import { styled } from 'baseui'

import LogoImg from 'src/assets/images/logo.svg'

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
          <StyledLink href="#">Login</StyledLink>
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
