import { useMutation } from '@redwoodjs/web'
import PasswordResetForm from 'src/components/PasswordResetForm'

const PASSWORD_RESET_MUTATION = gql`
  mutation ResetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      success
    }
  }
`

const PasswordReset = () => {
  const [sent, setSent] = React.useState(false)
  const [resetPassword, { loading, error }] = useMutation(
    PASSWORD_RESET_MUTATION,
    {
      onCompleted: () => {
        setSent(true)
      },
    }
  )

  const onSave = (input) => {
    resetPassword({ variables: { input } })
  }

  return !sent ? (
    <PasswordResetForm onSave={onSave} loading={loading} error={error} />
  ) : (
    <p>
      Password reset instructions have been sent to you if an account exists
      with that email.
    </p>
  )
}

export default PasswordReset
