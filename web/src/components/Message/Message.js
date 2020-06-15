import { useMutation } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_MESSAGE_MUTATION = gql`
  mutation DeleteMessageMutation($id: String!) {
    deleteMessage(id: $id) {
      id
    }
  }
`

const Message = ({ message }) => {
  const [deleteMessage] = useMutation(DELETE_MESSAGE_MUTATION, {
    onCompleted: () => {
      navigate(routes.messages())
      location.reload()
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete message ' + id + '?')) {
      deleteMessage({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Message {message.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>id</th>
              <td>{message.id}</td>
            </tr>
            <tr>
              <th>to</th>
              <td>{message.to}</td>
            </tr>
            <tr>
              <th>from</th>
              <td>{message.from}</td>
            </tr>
            <tr>
              <th>userId</th>
              <td>{message.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMessage({ id: message.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(message.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Message
