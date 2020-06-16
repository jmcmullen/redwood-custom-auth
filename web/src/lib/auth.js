import { navigate, routes } from '@redwoodjs/router'

const authClient = () => {
  return {
    type: 'custom',
    // client: () => {}, // Is this needed? no
    logIn: () => {
      // graphql mutation
      // save token
    },
    logOut: () => {
      // logout mutation
      // delete token
    },
    getToken: () => window.localStorage.getItem('token') || 'null',
    currentUser: async () => {
      // @TODO: Run GQL Query currentUser
      return 'abc'
    },
    getUserMetadata: () => {
      // ??
      return null
    },
  }
}

export default authClient
