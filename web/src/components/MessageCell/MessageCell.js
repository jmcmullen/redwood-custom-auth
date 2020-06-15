import Message from 'src/components/Message'

export const QUERY = gql`
  query FIND_MESSAGE_BY_ID($id: String!) {
    message: message(id: $id) {
      id
      to
      from
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Message not found</div>

export const Success = ({ message }) => {
  return <Message message={message} />
}
