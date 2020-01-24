import { AuthenticationError } from 'apollo-server';
import { authenticated } from './../../utils/auth';
import { Post } from './../post/post.model';

export const resolvers = {
  Query: {
    post: authenticated(
      async (_: any, { id }: any, { user }: any): Promise<any> => {
        try {
          const post: any = await Post.findById({ id, user: user.id }).sort({
            created_at: -1,
          });
          return { post };
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    posts: authenticated(
      async (_: any, __: any, { user }: any): Promise<any> => {
        try {
          const posts: any = await Post.find({ user: user.id })
            .sort({ created_at: -1 })
            .exec();
          return { posts };
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },
  Mutation: {
    newComment: authenticated(
      async (_: any, { text, id }: any, { user }: any): Promise<any> => {
        try {
          const post: any = await Post.findById({ id, user: user.id });

          const newComment = {
            avatar: user.avatar,
            name: user.username,
            text,
            user: user.id,
          };

          post.comments.unshift(newComment);
          await post.save();
          return { post };
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    newPost: authenticated(
      async (_: any, { text }: any, { currentUser }: any): Promise<any> => {
        try {
          const createPost: any = new Post({
            avatar: currentUser.avatar,
            name: currentUser.username,
            text,
            user: currentUser.id,
          });

          const newPost = await createPost.save();
          return { newPost };
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),

    removePost: authenticated(
      async (_: any, { id }: any, { currentUser }: any): Promise<void> => {
        try {
          const post: any = await Post.findByIdAndRemove({ id, user: currentUser.id });

          if (!post) {
            throw new AuthenticationError('Post not found');
          }

          if (post.user.toString() !== currentUser.id) {
            throw new AuthenticationError('User not authorized');
          }
          return await post;
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },

  Post: {
    comments: async (post: any, __: any, { currentUser }: any): Promise<any> => {
      try {
        const posts: any = await Post.findOne({ user: currentUser.id });
        return posts.comments.filter((comment: any) => comment.user.id === post.user.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    user: async (post: any, __: any, ___: any): Promise<any> => {
      try {
        return { __typename: 'User', id: post.user.id };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  User: {
    post: async (user: any, __: any, ___: any): Promise<any> => {
      try {
        const posts: any = await Post.findOne({ user: user.id });
        return posts.filter((post: any) => post.user.id === user.id);
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Comment: {
    user: async (comment: any, __: any, ___: any): Promise<any> => {
      try {
        return { __typename: 'User', id: comment.user.id };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },
};
