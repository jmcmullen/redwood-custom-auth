import { navigate, routes } from '@redwoodjs/router'

const authClient = () => {
  return {
    type: 'custom',
    // client: () => {}, // Is this needed?
    logIn: () => navigate(routes.logIn()), // Handle in app
    logOut: () => navigate(routes.logOut()), // Handle in app
    getToken: async () => window.localStorage.getItem('token') || 'false',
    currentUser: async () => {
      // @TODO: Run GQL Query currentUser
      return 'abc'
    },
    getUserMetadata: () => {
      // ??
      return { token: 'test', test: true }
    },
  }
}

export default authClient
