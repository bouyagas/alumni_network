import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    me(id: ID): User
  }

  type Mutation {
    signup(input: SignUpInput!): AuthUser!
    signin(input: SignInInput!): AuthUser!
    updateMe(input: UpdateUserInput!): User
  }

  type User @key(fields: "id") {
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
`;
