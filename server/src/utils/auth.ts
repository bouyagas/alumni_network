import { AuthenticationError } from 'apollo-server';
import config from 'config';
import jwt from 'jsonwebtoken';

export const authenticate = async (req: any, next?: any): Promise<void> => {
  // Get token from header
  const token: string = req.header('x-auth-token');
  // Check if not token
  if (!token) {
    throw new AuthenticationError('No token, authorization denied');
  }
  // Verify token
  try {
    const decoded: string | object = jwt.verify(token, config.get('jwtSecret.jwt'));
    // @ts-ignores
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};
