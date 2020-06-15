import { navigate } from '@redwoodjs/router'

const authClient = () => {
  // console.log(client, 'client')
  return {
    type: 'custom',
    logIn: async () => navigate.logIn(),
    logOut: () => navigate.logOut(),
    getToken: async () => window.localStorage.getItem('token'),
    currentUser: async () => {
      // graphql request
    },
    // getUser: async () => {
    //   console.log('getUser')
    // },
  }
}

export default authClient
