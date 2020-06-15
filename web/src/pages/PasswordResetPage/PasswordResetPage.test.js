import { render, cleanup } from '@redwoodjs/testing'

import PasswordResetPage from './PasswordResetPage'

describe('PasswordResetPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordResetPage />)
    }).not.toThrow()
  })
})
