import { render } from '@redwoodjs/testing'

import DashboardPage from './DashboardPage'

describe('DashboardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardPage />)
    }).not.toThrow()
  })
})
