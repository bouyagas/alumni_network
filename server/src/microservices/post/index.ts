import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from '../../serverConfig';
import { connect } from '../../serverConfig/db';
import { resolvers } from './post.resolvers';
import { typeDefs } from './post.typeDefs';

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
  const { url } = await server.listen({ port: 7002 });
  console.log(`🚀 Post server ready at ${url}`);
})();
