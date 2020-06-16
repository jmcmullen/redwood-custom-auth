// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }
import { AuthenticationError, context } from '@redwoodjs/api'

import { db } from './db'

export const getCurrentUser = async ({ id }) => {
  if (!id) return null

  const user = await db.user.findOne({ where: { id } })
  if (!user)
    throw new AuthenticationError("You don't have permission to do that.")

  return user
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
