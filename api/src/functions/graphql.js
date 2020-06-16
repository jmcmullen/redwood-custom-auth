import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import importAll from '@redwoodjs/api/importAll.macro'
import sendgrid from '@sendgrid/mail'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const schemas = importAll('api', 'graphql')
const services = importAll('api', 'services')

export const handler = createGraphQLHandler({
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  db,
  getCurrentUser,
})
