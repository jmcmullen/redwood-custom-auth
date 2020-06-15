import { sign, verify } from 'jsonwebtoken'

export function signToken(user, secret) {
  return sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.TOKEN_SECRET
  )
}

export function verifyToken(token, secret) {
  if (token) return verify(token, process.env.TOKEN_SECRET)
  return null
}

export function getUser(ctx) {
  try {
    const tokenWithBearer = ctx.request.get('Authorization')
    const token = tokenWithBearer.split(' ')[1]
    return verifyToken(token)
  } catch (error) {
    return null
  }
}
