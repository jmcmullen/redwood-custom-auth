import { render, cleanup } from '@redwoodjs/testing'

import DashboardLayout from './DashboardLayout'

describe('DashboardLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardLayout />)
    }).not.toThrow()
  })
})
