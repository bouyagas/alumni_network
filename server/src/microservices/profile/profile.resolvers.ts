import { AuthenticationError } from 'apollo-server';
import { Profile } from './profile.model';

const profile = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const profiles = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const newProfile = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const removeProfile = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

const updateProfile = async (_: any, args: string, ctx: any): Promise<void> => {
  try {
  } catch (err) {
    console.error(err.message);
    throw new AuthenticationError(err.message);
  }
};

export const resolver = {
  Query: {
    profile,
    profiles,
  },

  Mutation: {
    newProfile,
    removeProfile,
    updateProfile,
  },
};
