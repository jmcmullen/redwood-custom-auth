import { compare, hash } from 'bcrypt'
import sendgrid from '@sendgrid/mail'

import { db } from 'src/lib/db'
import { signToken, verifyToken, getUser } from 'src/lib/jwt'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const createUser = async ({ input }) => {
  const isValid = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim.test(
    input.username
  )
  if (!isValid) throw new Error('Please enter a valid username')

  const isEmail = /\S+@\S+\.\S+/.test(input.email)
  if (!isEmail) throw new Error('Please enter a valid email address')

  const emailExists = await db.user.findOne({
    where: { email: input.email },
  })
  if (emailExists) throw new Error('An account already exists with that email')

  const usernameExists = await db.user.findOne({
    where: { username: input.username },
  })
  if (usernameExists) throw new Error('That username is taken')

  const user = await db.user.create({
    data: {
      email: input.email.toLowerCase(),
      username: input.username.toLowerCase(),
      password: await hash(input.password, 10),
      verifyToken: signToken(input.email),
    },
  })

  sendgrid.send({
    to: user.email,
    from: 'noreply@test.fun',
    subject: 'Welcome to test.fun',
    html: `<strong>Thanks for joining test.fun,</strong>
          <br><br>Click the link below to verify your account:<br>
          <a href="${process.env.CLIENT_BASE_URL}/verify?t=${user.verifyToken}">
          ${process.env.CLIENT_BASE_URL}/verify?t=${user.verifyToken}</a>`,
  })

  return { user, token: signToken(user) }
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  messages: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).messages(),
}
