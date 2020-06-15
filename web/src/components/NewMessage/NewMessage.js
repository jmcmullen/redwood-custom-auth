import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MessageForm from 'src/components/MessageForm'

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      id
    }
  }
`

const NewMessage = () => {
  const [createMessage, { loading, error }] = useMutation(
    CREATE_MESSAGE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.messages())
      },
    }
  )

  const onSave = (input) => {
    createMessage({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Message</h2>
      </header>
      <div className="rw-segment-main">
        <MessageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMessage
