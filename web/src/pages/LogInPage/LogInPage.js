import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { useEffect } from 'react'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Paragraph2 } from 'baseui/typography'
import Login from 'src/components/Login'
import DashboardLayout from 'src/layouts/DashboardLayout'

import { FormContainer } from './style'

const LogInPage = () => {
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
          <Heading styleLevel={4}>Welcome Back</Heading>
          <Paragraph2>
            To login please enter your email and password.
          </Paragraph2>
        </HeadingLevel>
        <Login />
      </FormContainer>
    </DashboardLayout>
  )
}

export default LogInPage
