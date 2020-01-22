import { AuthenticationError, UserInputError } from 'apollo-server';
import * as gravatar from 'gravatar';
import { authenticated, createToken } from '../../utils/auth';
import { validateSignInInput, validateSignUpInput } from '../../utils/validators';
import { User } from './user.model';

export const resolvers = {
  Query: {
    me: authenticated(async (_: any, { id }: any, ___: any) => {
      return await User.findOne({ id });
    }),
  },
  Mutation: {
    signin: async (
      _: any,
      { input: { username, password, email } }: any,
      ___: any
    ): Promise<any> => {
      try {
        const { errors, valid } = validateSignInInput(username, email, password);

        if (!valid) {
          throw new UserInputError('Errors', { errors });
        }

        const user: any = await User.findOne({ email });

        if (!user) {
          errors.general = 'User not found';
          throw new UserInputError('User not found', { errors });
        }

        const match: boolean = await user.comparePassword(password);

        if (!match) {
          errors.general = 'Wrong crendetials';
          throw new UserInputError('Wrong crendetials', { errors });
        }
        const token = createToken(user);

        return { token, user };
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    signup: async (
      _: any,
      { input: { username, email, password, confirmPassword } }: any,
      ___: any
    ): Promise<any> => {
      try {
        const { valid, errors } = validateSignUpInput(username, email, password, confirmPassword);
        if (!valid) {
          throw new UserInputError('Errors', { errors });
        }
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          throw new UserInputError('Email is taken', {
            errors: {
              email: 'User already exists',
            },
          });
        }

        const avatar = gravatar.url(email, {
          d: 'mm',
          r: 'pg',
          s: '200',
        });

        const user: any = await User.create({ username, email, password, avatar });
        const token = createToken(user);
        return { token, user };
      } catch (err) {
        console.error(`mongodb cool ${err.message}`);
        throw new AuthenticationError(err.message);
      }
    },

    updateMe: authenticated(
      async (_: any, { input }: any, { user }: any): Promise<any> => {
        try {
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
    __resolveReference: async (_: any, { user }: any) => {
      return await User.findOne({ id: user.id });
    },
  },
};
