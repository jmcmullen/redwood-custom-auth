import DashboardLayout from 'src/layouts/DashboardLayout'
import EditMessageCell from 'src/components/EditMessageCell'

const EditMessagePage = ({ id }) => {
  return (
    <DashboardLayout>
      <EditMessageCell id={id} />
    </DashboardLayout>
  )
}

export default EditMessagePage
