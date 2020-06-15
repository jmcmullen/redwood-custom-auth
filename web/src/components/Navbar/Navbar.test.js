import { render, cleanup } from '@redwoodjs/testing'

import Navbar from './Navbar'

describe('Navbar', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<Navbar />)
    }).not.toThrow()
  })
})
