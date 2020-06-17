import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import SignUp from 'src/components/SignUp'
import DashboardLayout from 'src/layouts/DashboardLayout'
import { useEffect } from 'react'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Paragraph2 } from 'baseui/typography'

import { FormContainer } from './style'

const SignUpPage = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  return (
    <DashboardLayout>
      <FormContainer>
        <HeadingLevel>
          <Heading styleLevel={4}>Get Started</Heading>
          <Paragraph2>Fill in the form below to create an account.</Paragraph2>
        </HeadingLevel>
        <SignUp />
      </FormContainer>
    </DashboardLayout>
  )
}

export default SignUpPage
