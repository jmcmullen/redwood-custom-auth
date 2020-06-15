import { render, cleanup } from '@redwoodjs/testing'

import LogOutPage from './LogOutPage'

describe('LogOutPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<LogOutPage />)
    }).not.toThrow()
  })
})
