import { Wrapper, FooterLink, Logo } from './style'

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <FooterLink>Terms of Service</FooterLink>
        <FooterLink>Privacy Policy</FooterLink>
      </div>
      <Logo />
    </Wrapper>
  )
}

export default Footer
