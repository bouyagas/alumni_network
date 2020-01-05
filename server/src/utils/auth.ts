import { User } from '../types/user/user.model';
import cuid from 'cuid';

export const newApiKey = (): string => {
  return cuid();
};

export const authenticate = async (req: any): Promise<string> => {
  const apiKey: string = req.headers.authorization;
  if (!apiKey) {
    return;
  }

  const user: string = await User.findOne({ apiKey })
    .select('-password')
    .lean()
    .exec();

  return user;
};
