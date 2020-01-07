import { merge } from 'lodash';
import config from 'config';
import { BConfig } from '../interface';
const env = process.env.NODE_ENV || 'development';

const baseConfig: BConfig = {
  env,
  mongoDbUrl: '',
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 7000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d',
  },
};

let envConfig = {};

switch (env) {
  case 'dev':
  case 'development':
    envConfig = config.get('devConfig');
    break;
  case 'test':
  case 'testing':
    envConfig = config.get('testConfig"');
    break;
  default:
    envConfig = config.get('devConfig');
}

export const serverConfig = merge(baseConfig, envConfig);
