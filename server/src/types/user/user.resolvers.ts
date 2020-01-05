import { User } from './user.model';
import { AuthenticationError } from 'apollo-server';
import { newApiKey } from '../../utils/auth';
import { Document } from 'mongoose';

const me = (_: any, args: string, ctx: any): Promise<void> => {
  if (!ctx.user) {
    //@ts-ignore
    throw new AuthenticationError();
  }
  return ctx.user;
};

const updateMe = (_: any, args: any, ctx: any): Promise<void> => {
  if (!ctx.user) {
    //@ts-ignore
    throw new AuthenticationError();
  }

  return User.findByIdAndUpdate(ctx.user._id, args.input, { new: true })
    .select('-password')
    .lean()
    .exec();
};

const signup = (_: any, args: any): Promise<Document> => {
  return User.create({ ...args.input, apiKey: newApiKey() });
};

export default {
  Query: {
    me,
  },
  Mutation: {
    updateMe,
    signup,
  },
};
