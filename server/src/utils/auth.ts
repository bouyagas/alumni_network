import jwt from 'jsonwebtoken';
import config from 'config';

export const authenticate = async (req: any, next?: any) => {
  // Get token from header
  const token: string = req.header('x-auth-token');
  // Check if not token
  if (!token) {
    return;
  }
  // Verify token
  try {
    const decoded: string | object = jwt.verify(token, config.get('devConfig.devSecret.jwt'));
    //@ts-ignores
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
  }
};
