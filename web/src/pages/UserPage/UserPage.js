import DashboardLayout from 'src/layouts/DashboardLayout'
import UserCell from 'src/components/UserCell'

const UserPage = ({ id }) => {
  return (
    <DashboardLayout>
      <UserCell id={id} />
    </DashboardLayout>
  )
}

export default UserPage
