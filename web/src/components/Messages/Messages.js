import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_MESSAGE_MUTATION = gql`
  mutation DeleteMessageMutation($id: String!) {
    deleteMessage(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const MessagesList = ({ messages }) => {
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete message ' + id + '?')) {
      deleteMessage({ variables: { id }, refetchQueries: ['MESSAGES'] })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>id</th>
            <th>to</th>
            <th>from</th>
            <th>userId</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{truncate(message.id)}</td>
              <td>{truncate(message.to)}</td>
              <td>{truncate(message.from)}</td>
              <td>{truncate(message.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.message({ id: message.id })}
                    title={'Show message ' + message.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMessage({ id: message.id })}
                    title={'Edit message ' + message.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete message ' + message.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(message.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MessagesList
