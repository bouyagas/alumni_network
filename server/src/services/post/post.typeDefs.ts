import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Query {
    post: Post!
    posts: [Post!]!
  }

  extend type Mutation {
    newPost(input: NewPostInput!): Post!
    updatePost(input: UpdatePostInput!): Post!
    removePost(id: ID!): Post!
  }

  type Post @key(fields: "id") {
    id: ID!
    user: User! @provides(fields: "username")
    name: String!
    text: String!
    avatar: String
    likes: [Like!]!
    comments: [Comment!]!
  }

  extend type User @key(fields: "id") {
    id: ID! @external
    username: String! @external
    posts: [Post]
  }

  type Like {
    user: User! @provides(fields: "username")
  }

  type Comment {
    user: User! @provides(fields: "username")
    name: String!
    text: String!
    avatar: String
  }

  input UserInput {
    User: String
  }

  input LikeInput {
    user: UserInput!
  }

  input CommentInput {
    user: UserInput!
    name: String!
    text: String!
    avatar: String
  }

  input NewPostInput {
    text: String!
    name: String!
    avatar: String!
    likes: [LikeInput!]!
    comments: [CommentInput!]!
  }

  input UpdatePostInput {
    text: String!
    name: String!
    avatar: String
    likes: [LikeInput!]!
    comments: [CommentInput!]!
  }
`;
