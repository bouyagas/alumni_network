import jwt from 'jsonwebtoken';
import config from 'config';
import gravatar from 'gravatar';
import { AuthenticationError } from 'apollo-server';
import { User } from './user.model';

const me = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
    if (!ctx.user) {
      throw new AuthenticationError('Invalid Credentials');
    }
    return await ctx.user;
  } catch (err) {
    console.error(err.message);
  }
};

const signup = async (_: any, args: any, ctx: any): Promise<void> => {
  try {
    let { email } = args;
    let user = await User.findOne({ where: { email } });

    if (user) {
      throw new AuthenticationError('User already exists');
    }

    args.avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    user = await User.create({ ...args.input });

    let payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('devConfig.devSecret.jwt'),
      { expiresIn: 360000 },
      (err: any, token: string): string => {
        if (err) throw err;
        return token;
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

const signin = async (_: any, args: any, ctx: any): Promise<void> => {
  try {
    let { email } = args;
    let user = await User.findOne({ where: { email } });

    if (!user) {
      throw new AuthenticationError('No user with that email');
    }

    let payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      config.get('devConfig.devSecret.jwt'),
      { expiresIn: 360000 },
      (err: any, token: string): string => {
        if (err) throw err;
        return token;
      }
    );
  } catch (err) {
    console.error(err.message);
  }
};

const updateMe = async (_: any, args: any, ctx: any): Promise<void> => {
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
  }
};

export default {
  Query: {
    me,
  },

  Mutation: {
    signup,
    signin,
    updateMe,
  },
};
