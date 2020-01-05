import { merge } from 'lodash';
import { BConfig } from '../interface';
const env = process.env.NODE_ENV || 'development';

const baseConfig: BConfig = {
  dbUrl: '',
  env,
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
    envConfig = require('./dev').config;
    break;
  case 'test':
  case 'testing':
    envConfig = require('./testing').config;
    break;
  default:
    envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
