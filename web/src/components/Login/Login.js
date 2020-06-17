import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import LoginForm from 'src/components/LoginForm'

const LOGIN_MUTATION = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        role
        email
      }
    }
  }
`

const Login = () => {
  const { logIn } = useAuth()
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: async ({ login }) => {
      await logIn(login.token)
      await navigate(routes.dashboard())
    },
  })

  const onSave = (input) => {
    login({ variables: { input } })
  }

  return <LoginForm onSave={onSave} loading={loading} error={error} />
}

export default Login
