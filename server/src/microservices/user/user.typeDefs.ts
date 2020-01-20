import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    me: User!
  }

  type Mutation {
    signup(input: NewUserInput!): AuthUser!
    signin(input: CurrentUserInput): AuthUser!
    updateMe(input: UpdateUserInput!): User!
  }

  type User @key(fields: "id") {
    id: ID!
    username: String!
    email: String!
    avatar: String
  }

  type AuthUser {
    token: String!
    user: User!
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
