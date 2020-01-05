import { ApolloServer } from 'apollo-server';
import { loadTypeSchema } from './utils/schema';
import { authenticate } from './utils/auth';
import { merge } from 'lodash';
import config from './config';
import { connect } from './db';
import post from './types/post/post.resolvers';
import profile from './types/profile/profile.resolvers';
import user from './types/user/user.resolvers';

const types = ['post', 'profile', 'user'];

export const start = async (): Promise<void> => {
  const rootSchema = `
    schema {
      query: Query
      mutation: Mutation
    }
  `;
  const schemaTypes = await Promise.all(types.map(loadTypeSchema));

  const server: ApolloServer = new ApolloServer({
    //@ts-ignore
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, post, profile, user),
    async context({ req }) {
      const user = await authenticate(req);
      return { user };
    },
  });

  await connect(config.dbUrl);
  const { url } = await server.listen({ port: config.port });

  console.log(`GQL server ready at ${url}`);
};
