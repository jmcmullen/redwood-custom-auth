import DashboardLayout from 'src/layouts/DashboardLayout'
import { useAuth } from '@redwoodjs/auth'

const DashboardPage = () => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <DashboardLayout>
      <h1>DashboardPage</h1>
      <p>Find me in ./web/src/pages/DashboardPage/DashboardPage.js</p>
      <code>isAuthenticated: {isAuthenticated}</code>
      <code>currentUser: {JSON.stringify(currentUser)}</code>
    </DashboardLayout>
  )
}

export default DashboardPage
