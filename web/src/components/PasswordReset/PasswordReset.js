import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PasswordResetForm from 'src/components/PasswordResetForm'

const REGISTER_MUTATION = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      id
    }
  }
`

const PasswordReset = () => {
  const [login, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input) => {
    login({ variables: { input } })
  }

  return <PasswordResetForm onSave={onSave} loading={loading} error={error} />
}

export default PasswordReset
