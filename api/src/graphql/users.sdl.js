import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: String!
    username: String!
    email: String!
    verified: Boolean!
    password: String!
    role: UserType!
    messages: Message
  }

  enum UserType {
    ADMIN
    CUSTOMER
    MODERATOR
  }

  type Query {
    users: [User!]!
    user(id: String!): User!
  }

  input CreateUserInput {
    username: String!
    email: String!
    verified: Boolean!
    password: String!
    role: UserType!
  }

  input UpdateUserInput {
    username: String
    email: String
    verified: Boolean
    password: String
    role: UserType
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
