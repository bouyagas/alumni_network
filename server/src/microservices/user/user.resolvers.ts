import { AuthenticationError } from 'apollo-server';
import * as gravatar from 'gravatar';
import { authenticated, createToken } from '../../utils/auth';
import { User } from './user.model';

export const resolvers = {
  Query: {
    me: authenticated(
      async (_: any, __: any, { user }: any): Promise<any> => {
        try {
          if (!user) {
            throw new AuthenticationError('Invalid Credentials');
          }
          return await user;
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },

  Mutation: {
    signin: async (_: any, { input: { password, email } }: any, ___: any): Promise<any> => {
      try {
        const getUser: any = await User.findOne({ email });

        if (!getUser) {
          throw new AuthenticationError('No user with that email');
        }
        const match: boolean = await getUser.comparePassword(password);
        if (match) {
          const token = createToken(getUser);
          return { token, getUser };
        }
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    signup: async (
      _: any,
      { input: { username, email, password } }: any,
      ___: any
    ): Promise<any> => {
      try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new AuthenticationError('User already exists');
        }

        const avatar = gravatar.url(email, {
          d: 'mm',
          r: 'pg',
          s: '200',
        });

        const newUser: any = await User.create({ username, email, password, avatar });

        const token = createToken(newUser);
        return { token, newUser };
      } catch (err) {
        console.error(`mongodb cool ${err.message}`);
        throw new AuthenticationError(err.message);
      }
    },

    updateMe: authenticated(
      async (_: any, { input }: any, { user }: any): Promise<any> => {
        try {
          if (!user) {
            throw new AuthenticationError('Invalid Credentials');
          }

          return await User.findByIdAndUpdate(user.id, input, { new: true })
            .select('-password')
            .lean()
            .exec();
        } catch (err) {
          console.error(err.message);
          throw new AuthenticationError(err.message);
        }
      }
    ),
  },

  User: {
    __resolveReference: async (object: any, ___: any) => {
      return await User.findById(object.id);
    },
  },
};
