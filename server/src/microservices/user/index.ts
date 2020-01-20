import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from '../../serverConfig';
import { connect } from '../../serverConfig/db';
import { resolvers } from './user.resolvers';
import { typeDefs } from './user.typeDefs';

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
  const { url } = await server.listen({ port: 7001 });
  console.log(`🚀 User server ready at ${url}`);
})();
