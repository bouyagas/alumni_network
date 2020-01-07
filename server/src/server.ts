import { ApolloServer, AuthenticationError } from 'apollo-server';
import { loadTypeSchema } from './utils/schema';
import { authenticate } from './utils/auth';
import { merge } from 'lodash';
import { serverConfig } from './config';
import { connect } from './config/db';
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
      const user: any = await authenticate(req);
      if (!user) throw new AuthenticationError('you must be logged in');
      return { user };
    },
  });

  await connect(serverConfig.mongoDbUrl);
  const { url } = await server.listen({ port: serverConfig.port });

  console.log(`GQL 🚀 Server ready at ${url}`);
};
