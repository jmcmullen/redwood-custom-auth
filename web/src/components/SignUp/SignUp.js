import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'

import SignUpForm from '../SignUpForm/SignUpForm'

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($input: RegisterInput!) {
    register(input: $input) {
      token
      user {
        id
      }
    }
  }
`

const SignUp = () => {
  const [register, { loading, error }] = useMutation(REGISTER_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard())
    },
  })

  const onSave = (input) => {
    register({ variables: { input } })
  }

  return <SignUpForm onSave={onSave} loading={loading} error={error} />
}

export default SignUp
