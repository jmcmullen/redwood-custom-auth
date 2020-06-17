import { styled } from 'styletron-react'
import { Link } from '@redwoodjs/router'

import LogoImg from 'src/assets/images/logo.svg'

export const Wrapper = styled('footer', {
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '#f2f2f2',
})

export const FooterLink = styled(Link, {
  padding: '1rem',
})

export const Logo = styled(LogoImg, {
  width: '50px',
  height: '40px',
  marginTop: '20px',
})
