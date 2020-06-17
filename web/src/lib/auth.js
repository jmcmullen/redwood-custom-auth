const authClient = () => {
  return {
    type: 'custom',
    login: async (token) => window.localStorage.setItem('token', token),
    logout: () => window.localStorage.removeItem('token'),
    getToken: () => window.localStorage.getItem('token') || '',
    getUserMetadata: () => window.localStorage.getItem('token'),
  }
}

export default authClient
