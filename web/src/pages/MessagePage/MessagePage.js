import MessagesLayout from 'src/layouts/MessagesLayout'
import MessageCell from 'src/components/MessageCell'

const MessagePage = ({ id }) => {
  return (
    <MessagesLayout>
      <MessageCell id={id} />
    </MessagesLayout>
  )
}

export default MessagePage
