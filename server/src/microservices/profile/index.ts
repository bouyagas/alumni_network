import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from '../../serverConfig';
import { connect } from '../../serverConfig/db';
import { resolvers } from './profile.resolvers';
import { typeDefs } from './profile.typeDefs';

(async () => {
  const server = new ApolloServer({
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
