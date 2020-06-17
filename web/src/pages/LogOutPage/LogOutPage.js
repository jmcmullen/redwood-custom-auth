import { useEffect } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

const LogOutPage = () => {
  const { logOut } = useAuth()

  useEffect(() => {
    const process = async () => {
      await logOut()
      navigate(routes.logIn())
    }
    process()
  }, [logOut])

  return null
}

export default LogOutPage
