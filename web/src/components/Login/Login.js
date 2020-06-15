import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import LoginForm from 'src/components/LoginForm'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      id
    }
  }
`

const NewUser = () => {
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input) => {
    login({ variables: { input } })
  }

  return <LoginForm onSave={onSave} loading={loading} error={error} />
}

export default NewUser
