import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import UserForm from 'src/components/UserForm'

export const QUERY = gql`
  query FIND_USER_BY_ID($id: String!) {
    user: user(id: $id) {
      id
      email
      verified
      password
      role
    }
  }
`
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ user }) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit User {user.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
