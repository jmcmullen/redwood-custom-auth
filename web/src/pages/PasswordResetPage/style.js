import { styled } from 'styletron-react'

export const FormContainer = styled('div', {
  width: '100%',
  maxWidth: '500px',
  margin: 'auto',

  '@media screen and (min-width: 796px)': {
    padding: `2rem 0`,
  },
})
