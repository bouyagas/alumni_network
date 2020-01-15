import { AuthenticationError } from 'apollo-server';
import config from 'config';
import gravatar from 'gravatar';
import jwt from 'jsonwebtoken';
import { User } from './user.model';

export const resolver = {
  Query: {
    me: async (_: any, args: string, ctx: any): Promise<void> => {
      try {
        if (!ctx.user) {
          throw new AuthenticationError('Invalid Credentials');
        }
        return await ctx.user;
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Mutation: {
    signin: async (_: any, args: any, ctx: any): Promise<void> => {
      try {
        const { email } = args;
        ctx.user = await User.findOne({ where: { email } });

        if (!ctx.user) {
          throw new AuthenticationError('No user with that email');
        }

        const payload = {
          user: {
            id: ctx.user.id,
          },
        };
        jwt.sign(
          payload,
          config.get('jwtSecret.jwt'),
          { expiresIn: 360000 },
          (err: any, token: string): string => {
            if (err) {
              throw err;
            }
            return token;
          }
        );
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    signup: async (_: any, { username, email, password }: any, ctx: any): Promise<void> => {
      try {
        let user = await User.findOne({ where: { email } });

        if (user) {
          throw new AuthenticationError('User already exists');
        }

        const avatar = gravatar.url(email, {
          d: 'mm',
          r: 'pg',
          s: '200',
        });

        user = await User.create({ username, email, password, avatar });

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          config.get('jwtSecret.jwt'),
          { expiresIn: 360000 },
          (err: any, token: string): string => {
            if (err) {
              throw err;
            }
            return token;
          }
        );
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    updateMe: async (_: any, args: any, ctx: any): Promise<void> => {
      try {
        if (!ctx.user) {
          throw new AuthenticationError('Invalid Credentials');
        }

        return await User.findByIdAndUpdate(ctx.user._id, args.input, { new: true })
          .select('-password')
          .lean()
          .exec();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  User: {
    __resolveReference(user: any) {
      return User.findById(user.id);
    },
  },
};
