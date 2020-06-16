import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import { Spinner } from 'baseui/spinner'
import { Notification, KIND } from 'baseui/notification'
import { useEffect } from 'react'

const VERIFY_MUTATION = gql`
  mutation VerifyMutation($input: VerifyInput!) {
    verify(input: $input) {
      token
      user {
        id
        role
        email
      }
    }
  }
`

const Verify = ({ userId, token }) => {
  const [verify, { error }] = useMutation(VERIFY_MUTATION, {
    onCompleted: ({ verify }) => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('token', verify.token)
        navigate(routes.dashboard())
      }
    },
  })

  useEffect(() => {
    verify({ variables: { input: { userId, token } } })
  }, [verify, userId, token])

  if (error)
    return (
      <Notification
        kind={KIND.negative}
        overrides={{
          Body: { style: { width: 'auto' } },
        }}
      >
        {(error.graphQLErrors[0] && error.graphQLErrors[0]?.message) ||
          error.message}
      </Notification>
    )

  return <Spinner />
}

export default Verify
