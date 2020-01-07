import mongoose from 'mongoose';
import { serverConfig } from './index';

export const connect = async (url: string = serverConfig.mongoDbUrl, opts = {}): Promise<void> => {
  try {
    await mongoose.connect(url, {
      ...opts,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
