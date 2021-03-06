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

export const LinkText = styled(Link, {
  width: '100%',
  padding: '1rem',
  display: 'block',
  cursor: 'pointer',
  textAlign: 'center',
  color: '#777777',
})

export const NextBtn = styled(Button, {
  width: '100%',
})
