import { navigate, routes } from '@redwoodjs/router'

const authClient = () => {
  return {
    type: 'custom',
    logIn: () => {
      navigate(routes.logIn())
    },
    logOut: () => {
      window.localStorage.removeItem('token')
      navigate(routes.logIn())
    },
    getToken: () => window.localStorage.getItem('token') || null,
    // currentUser: async (data) => {
    //   // @TODO: Run GQL Query currentUser
    //   console.log('currenUser', data)
    // },
    getUserMetadata: () => {
      // ??
      return window.localStorage.getItem('token')
    },
  }
}

export default authClient
