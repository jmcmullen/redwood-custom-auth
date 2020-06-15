import gql from 'graphql-tag'

export const schema = gql`
  type Message {
    id: String!
    to: String!
    from: String!
    userId: String!
    user: User!
  }

  type Query {
    messages: [Message!]!
    message(id: String!): Message!
  }

  input CreateMessageInput {
    to: String!
    from: String!
    userId: String!
  }

  input UpdateMessageInput {
    to: String
    from: String
    userId: String
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message!
    updateMessage(id: String!, input: UpdateMessageInput!): Message!
    deleteMessage(id: String!): Message!
  }
`
