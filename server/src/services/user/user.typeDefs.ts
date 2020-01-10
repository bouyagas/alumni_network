import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    me: User!
  }

  type Mutation {
    signup(input: NewUserInput!): User!
    signin(input: CurrentUserInput): User!
    updateMe(input: UpdateUserInput!): User!
  }

  type User @key(fields: "id") {
    id: ID!
    username: String!
    email: String!
    avatar: String
  }

  input NewUserInput {
    username: String!
    email: String!
    avatar: String
    password: String!
  }

  input CurrentUserInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String!
    email: String
  }
`;
