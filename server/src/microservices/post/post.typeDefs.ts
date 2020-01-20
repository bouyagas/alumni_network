import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    post(id: ID!): Post!
    posts: [Post]!
  }

  extend type Mutation {
    newComment(input: CommentInput!): Comment!
    newPost(input: NewPostInput!): Post!
    removePost(id: ID!): Post!
  }

  type Post @key(fields: "id") {
    id: ID!
    name: User! @provides(fields: "username")
    text: String!
    avatar: User! @provides(fields: "avatar")
    comments: [Comment]!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    username: String! @external
    avatar: String @external
    posts: [Post]!
  }

  type Comment {
    name: User! @provides(fields: "username")
    text: String!
    avatar: User! @provides(fields: "avatar")
  }

  input CommentInput {
    name: String
    text: String!
    avatar: String
  }

  input NewPostInput {
    text: String!
    name: String
    avatar: String
  }
`;
