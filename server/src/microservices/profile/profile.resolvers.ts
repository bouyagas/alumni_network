import { AuthenticationError } from 'apollo-server';
import { Profile } from './profile.model';

export const resolver = {
  Query: {
    profile: async (_: any, ___: any, { user }: any): Promise<any> => {
      try {
        const profile: any = await Profile.findOne({ user: user.id }).populate('user', [
          'username',
          'avatar',
        ]);
        if (!profile) {
          throw new AuthenticationError('There is no profile for this user');
        }
        return profile
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    profiles: async (_: any, __: any, ____: any): Promise<any> => {
      try {
        const profile: any = await Profile.findOne({});
        return profile
          .exec()
          .lean()
          .toObject();
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  Mutation: {
    newProfile: async (_: any, args: string, ctx: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    removeProfile: async (_: any, args: string, ctx: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },

    updateProfile: async (_: any, args: string, ctx: any): Promise<void> => {
      try {
      } catch (err) {
        console.error(err.message);
        throw new AuthenticationError(err.message);
      }
    },
  },

  User: {
    profile: async (user: any) => {},
  },

  Profile: {
    user: async (profile: any) => {},
  },
};
