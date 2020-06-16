import { AuthenticationError, context } from '@redwoodjs/api'

import { verifyToken } from './jwt'

export const getCurrentUser = async (token) => {
  return verifyToken(token)
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
