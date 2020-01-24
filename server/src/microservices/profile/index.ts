import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from '../../serverConfig';
import {Profile} from './profile.model'
import {  getUserFromToken } from '../../utils/auth';
import { connect } from '../../serverConfig/db';
import { resolvers } from './profile.resolvers';
import { typeDefs } from './profile.typeDefs';

(async () => {
  const server = new ApolloServer({
     context: ({ req }) => {
      const token = req.headers.authorization;
      const user = getUserFromToken(token);
      return {
        models: { Profile },
        user,
      };
    },
    schema: buildFederatedSchema([
      {
        // @ts-ignore
        resolvers,
        typeDefs,
      },
    ]),
  });

  await connect(serverConfig.mongoDbUrl);
  const { url } = await server.listen({ port: 7003 });
  console.log(`🚀 Profile server ready at ${url}`);
})();
