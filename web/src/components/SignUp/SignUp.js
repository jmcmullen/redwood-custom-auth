import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import SignUpForm from '../SignUpForm/SignUpForm'

const REGISTER_MUTATION = gql`
  mutation LoginMutation($input: LoginInput!) {
    login(input: $input) {
      id
    }
  }
`

const SignUp = () => {
  const [login, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.users())
    },
  })

  const onSave = (input) => {
    login({ variables: { input } })
  }

  return <SignUpForm onSave={onSave} loading={loading} error={error} />
}

export default SignUp
