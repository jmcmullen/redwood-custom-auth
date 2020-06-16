import { compare, hash } from 'bcrypt'
import sendgrid from '@sendgrid/mail'

import { db } from 'src/lib/db'
import { signToken, verifyToken, getUser } from 'src/lib/jwt'

sendgrid.setApiKey(process.env.SENDGRID_SECRET)

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const register = async ({ input }) => {
  const isEmail = /\S+@\S+\.\S+/.test(input.email)
  if (!isEmail) throw new Error('Please enter a valid email address')

  const emailExists = await db.user.findOne({
    where: { email: input.email },
  })
  if (emailExists) throw new Error('An account already exists with that email')

  if (input.password !== input.confirmPassword)
    throw new Error('Password confirmation does not match')

  const user = await db.user.create({
    data: {
      email: input.email.toLowerCase(),
      password: await hash(input.password, 10),
    },
  })

  sendgrid.send({
    to: user.email,
    from: 'noreply@nique.io',
    subject: 'Welcome to my website',
    html: `<strong>Thanks for joining my site,</strong>
          <br><br>Click the link below to verify your account:<br>
          <a href="${process.env.CLIENT_BASE_URL}/verify?t=${user.verifyToken}">
          ${process.env.CLIENT_BASE_URL}/verify?t=${user.verifyToken}</a>`,
  })

  return { user, token: signToken(user) }
}

export const login = async ({ input }) => {
  const user = await db.user.findOne({ where: { email: input.email } })
  if (!user) throw new Error('Invalid email or password')

  const passwordMatch = await compare(input.password, user.password)
  if (!passwordMatch) throw new Error('Invalid email or password')

  return { user, token: signToken(user) }
}

export const verify = async ({ input }) => {
  const valid = verifyToken(input.token)
  if (!valid) throw new Error('Invalid verification token')

  const user = await db.user.findOne({ where: { id: valid.id } })
  if (!user) throw new Error('Invalid verification token')

  return await user.update({ data: { verified: true } })
}

export const resetPassword = async ({ input }) => {
  const user = await db.user.findOne({
    where: { email: input.email.toLowerCase() },
  })

  if (user) {
    const token = signToken(user, user.password)

    sendgrid.send({
      to: user.email,
      from: 'noreply@nique.io',
      subject: 'Forgot your password?',
      html: `<p>Someone (hopefully you!) has submitted a forgotten password request for your account.</p>
        <p>If this was you, click the following link to reset your password:</p>
        <a href="${process.env.CLIENT_BASE_URL}/reset-password?t=${token}">
          ${process.env.CLIENT_BASE_URL}/reset-password?t=${token}
        </a>
        <p>If you do not wish to change your password, just ignore this email and nothing will happen.</p>
        `,
    })
  }

  return { success: true }
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
