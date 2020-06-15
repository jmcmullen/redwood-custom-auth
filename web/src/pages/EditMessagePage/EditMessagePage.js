import MessagesLayout from 'src/layouts/MessagesLayout'
import EditMessageCell from 'src/components/EditMessageCell'

const EditMessagePage = ({ id }) => {
  return (
    <MessagesLayout>
      <EditMessageCell id={id} />
    </MessagesLayout>
  )
}

export default EditMessagePage
