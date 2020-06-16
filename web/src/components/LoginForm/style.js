import { styled } from 'styletron-react'
import { Button } from 'baseui/button'
import { Link } from '@redwoodjs/router'

export const Title = styled('h2', {
  margin: '1rem 0',
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',

  '@media screen and (min-width: 796px)': {
    padding: `2rem 0`,
  },
})

export const LinkContanier = styled('div', {
  display: 'flex',
  padding: '1rem',
  justifyContent: 'center',
})

export const LinkText = styled(Link, {
  padding: '0 .5rem',
  cursor: 'pointer',
  textAlign: 'center',
  color: '#777777',
})

export const NextBtn = styled(Button, {
  width: '100%',
})
