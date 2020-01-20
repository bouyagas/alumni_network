import { AuthenticationError } from 'apollo-server';

import * as config from 'config';
import * as jwt from 'jsonwebtoken';
import { User } from '../microservices/user/user.model';

// @ts-ignore
export const createToken = ({ id }) =>
  jwt.sign({ id }, config.get('jwtSecret.jwt'), { expiresIn: 360000 });

export const getUserFromToken = (token: any) => {
  try {
    const user: any = jwt.verify(token, config.get('jwtSecret.jwt'));
    return User.findOne({ id: user.id });
  } catch (e) {
    return null;
  }
};

export const authenticated = (next: any) => (root: any, args: any, context: any, info: any) => {
  if (!context.user) {
    throw new AuthenticationError('must authenticate');
  }

  return next(root, args, context, info);
};

export const authorized = (id: any, next: any) => (
  root: any,
  args: any,
  context: any,
  info: any
) => {
  if (context.user.id !== id) {
    throw new AuthenticationError(`you must have ${id} role`);
  }

  return next(root, args, context, info);
};
