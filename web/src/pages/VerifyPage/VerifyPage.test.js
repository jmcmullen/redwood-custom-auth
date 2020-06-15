import { render, cleanup } from '@redwoodjs/testing'

import VerifyPage from './VerifyPage'

describe('VerifyPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<VerifyPage />)
    }).not.toThrow()
  })
})
