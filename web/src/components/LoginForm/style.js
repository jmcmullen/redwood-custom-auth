import { styled } from 'styletron-react'
import { Button } from 'baseui/button'

export const Title = styled('h2', {
  margin: '1rem 0',
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '800px',

  '@media screen and (min-width: 796px)': {
    padding: `2rem 0`,
  },
})

export const LinkText = styled('a', {
  width: '100%',
  padding: '1rem',
  display: 'block',
  cursor: 'pointer',
  textAlign: 'center',
})

export const NextBtn = styled(Button, {
  width: '100%',
})
