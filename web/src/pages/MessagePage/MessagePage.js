import DashboardLayout from 'src/layouts/DashboardLayout'
import MessageCell from 'src/components/MessageCell'

const MessagePage = ({ id }) => {
  return (
    <DashboardLayout>
      <MessageCell id={id} />
    </DashboardLayout>
  )
}

export default MessagePage
