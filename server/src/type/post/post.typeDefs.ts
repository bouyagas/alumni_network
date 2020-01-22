import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  type Post {
    id: ID!
    name: User!
    text: String!
    comments: [Comment]!
  }

  type Comment {
    user: User!
    text: String!
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

  extend type Query {
    post: Post!
    posts: [Post]!
  }

  extend type Mutation {
    newComment(input: CommentInput!): Comment!
    newPost(input: NewPostInput!): Post!
    removePost(id: ID!): Post!
  }
`;
