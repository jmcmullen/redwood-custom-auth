import DashboardLayout from 'src/layouts/DashboardLayout'
import EditUserCell from 'src/components/EditUserCell'

const EditUserPage = ({ id }) => {
  return (
    <DashboardLayout>
      <EditUserCell id={id} />
    </DashboardLayout>
  )
}

export default EditUserPage
