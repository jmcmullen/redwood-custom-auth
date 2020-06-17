import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Paragraph2 } from 'baseui/typography'
import PasswordResetForm from 'src/components/PasswordResetForm'
import PasswordForgotForm from 'src/components/PasswordForgotForm'

const PASSWORD_RESET_MUTATION = gql`
  mutation ResetPasswordMutation($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      user {
        id
      }
      token
    }
  }
`

const PASSWORD_FORGOT_MUTATION = gql`
  mutation ForgotPasswordMutation($input: ForgotPasswordInput!) {
    forgotPassword(input: $input) {
      success
    }
  }
`

const PasswordReset = ({ userId, resetToken }) => {
  const [sent, setSent] = React.useState(false)
  const [resetPassword, resetStatus] = useMutation(PASSWORD_RESET_MUTATION, {
    onCompleted: () => {
      navigate(routes.dashboard())
    },
  })

  const [forgotPassword, forgotStatus] = useMutation(PASSWORD_FORGOT_MUTATION, {
    onCompleted: () => {
      setSent(true)
    },
  })

  const onReset = (input) => {
    input.userId = userId
    input.token = resetToken
    resetPassword({ variables: { input } })
  }

  const onForgot = (input) => {
    forgotPassword({ variables: { input } })
  }

  return !sent ? (
    <>
      {!resetToken ? (
        <>
          <HeadingLevel>
            <Heading styleLevel={4}>Forgot Password</Heading>
            <Paragraph2>
              Enter the email associated with your account.
            </Paragraph2>
          </HeadingLevel>
          <PasswordForgotForm
            onSave={onForgot}
            loading={forgotStatus.loading}
            error={forgotStatus.error}
          />
        </>
      ) : (
        <PasswordResetForm
          onSave={onReset}
          loading={resetStatus.loading}
          error={resetStatus.error}
        />
      )}
    </>
  ) : (
    <HeadingLevel>
      <Heading styleLevel={4}>Email Sent</Heading>
      <Paragraph2>
        Password reset instructions have been sent to you if an account exists
        with that email.
      </Paragraph2>
    </HeadingLevel>
  )
}

export default PasswordReset
