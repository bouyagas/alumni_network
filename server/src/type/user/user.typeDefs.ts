import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
  }

  type AuthUser {
    token: String!
    user: User
  }
  input SignUpInput {
    username: String!
    email: String!
    avatar: String
    password: String!
    confirmPassword: String!
  }

  input SignInInput {
    username: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    username: String!
    email: String
  }

  extend type Query {
    me: User!
  }

  extend type Mutation {
    signup(input: SignUpInput!): AuthUser!
    signin(input: SignInInput!): AuthUser!
    updateMe(input: UpdateUserInput!): User
  }
`;
