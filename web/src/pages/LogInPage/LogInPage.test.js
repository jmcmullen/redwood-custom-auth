import { render, cleanup } from '@redwoodjs/testing'

import LogInPage from './LogInPage'

describe('LogInPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LogInPage />)
    }).not.toThrow()
  })
})
