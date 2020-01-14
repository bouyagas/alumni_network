import { AuthenticationError } from 'apollo-server';
import { Post } from './post.model';

const post = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const posts = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const newPost = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const removePost = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const updatePost = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

export const resolver = {
  Query: {
    post,
    posts,
  },

  Mutation: {
    newPost,
    removePost,
    updatePost,
  },
};
