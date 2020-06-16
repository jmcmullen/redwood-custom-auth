import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: String!
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

  input LoginInput {
    email: String!
    password: String!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  input VerifyInput {
    token: String!
  }

  input UpdateUserInput {
    email: String
    verified: Boolean
    password: String
    role: UserType
  }

  type AuthResponse {
    user: User
    token: String
  }

  type Mutation {
    login(input: LoginInput!): AuthResponse!
    register(input: RegisterInput): AuthResponse!
    verify(input: VerifyInput): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
