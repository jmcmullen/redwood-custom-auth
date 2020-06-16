import gql from 'graphql-tag'

export const schema = gql`
  type User {
    id: ID!
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
    confirmPassword: String!
  }

  input VerifyInput {
    userId: ID!
    token: String!
  }

  input ForgotPasswordInput {
    email: String!
  }

  input ResetPasswordInput {
    userId: ID!
    token: String!
    password: String!
    confirmPassword: String!
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

  type SuccessResponse {
    success: Boolean
  }

  type Mutation {
    login(input: LoginInput!): AuthResponse!
    register(input: RegisterInput): AuthResponse!
    verify(input: VerifyInput): AuthResponse!
    forgotPassword(input: ForgotPasswordInput): SuccessResponse!
    resetPassword(input: ResetPasswordInput): AuthResponse!

    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
