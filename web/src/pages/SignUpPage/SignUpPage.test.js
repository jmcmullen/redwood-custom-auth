import { render, cleanup } from '@redwoodjs/testing'

import SignUpPage from './SignUpPage'

describe('SignUpPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SignUpPage />)
    }).not.toThrow()
  })
})
