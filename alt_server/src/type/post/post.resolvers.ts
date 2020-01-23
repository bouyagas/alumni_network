import { AuthenticationError } from 'apollo-server';
import { checkAuth } from '../../utils/auth';
import { Post } from './post.model';

export const postsResolvers = {
  Query: {
    post: async (_: any, { id }: any, { user }: any): Promise<any> => {
      try {
        const post: any = await Post.findById({ id, user: user.id }).sort({
          created_at: -1,
        });
        return { post };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
    posts: async (_: any, __: any, { user }: any): Promise<any> => {
      try {
        const posts: any = await Post.find({ id: user.id })
          .sort({ created_at: -1 })
          .exec();
        return { posts };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },
  // tslint:disable-next-line: object-literal-sort-keys
  Mutation: {
    newComment: async (_: any, { text }: any, { user }: any): Promise<any> => {
      try {
        const post: any = await Post.findById({ id: user.id });

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
    },
    newPost: async (_: any, { text }: any, context: any): Promise<any> => {
      try {
        const user: any = checkAuth(context);
        console.log(user);
        const createPost: any = new Post({
          avatar: user.avatar,
          name: user.username,
          text,
          user: user.id,
        });

        const newPost = await createPost.save();
        return { newPost };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
    removePost: async (_: any, { id }: any, { user }: any): Promise<void> => {
      try {
        const post: any = await Post.findByIdAndRemove({ id, user: user.id });

        if (!post) {
          throw new AuthenticationError('Post not found');
        }

        if (post.user.toString() !== user.id) {
          throw new AuthenticationError('User not authorized');
        }
        return await post;
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },
};
