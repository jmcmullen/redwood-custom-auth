import { render, cleanup } from '@redwoodjs/testing'

import LogInSessionPage from './LogInSessionPage'

describe('LogInSessionPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LogInSessionPage />)
    }).not.toThrow()
  })
})
