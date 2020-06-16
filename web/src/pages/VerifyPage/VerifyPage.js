import DashboardLayout from 'src/layouts/DashboardLayout'
import Verify from 'src/components/Verify'

const VerifyPage = ({ u, t }) => {
  return (
    <DashboardLayout>
      <Verify userId={u} token={t} />
    </DashboardLayout>
  )
}

export default VerifyPage
