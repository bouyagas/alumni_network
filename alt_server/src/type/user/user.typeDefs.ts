import { gql } from 'apollo-server';

export const usersTypeDefs = gql`
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

  type Query {
    me: User!
  }

  type Mutation {
    signup(input: SignUpInput!): AuthUser!
    signin(input: SignInInput!): AuthUser!
    updateMe(input: UpdateUserInput!): User
  }
`;
