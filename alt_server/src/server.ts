import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { serverConfig } from './serverConfig';
import { connect } from './serverConfig/db';

import { resolvers, typeDefs } from './type/root';

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

(async () => {
  const server = new ApolloServer({
    context: ({ req }) => ({ req }),
    schema,
    subscriptions: false,
    tracing: true,
  });
  await connect(serverConfig.mongoDbUrl);
  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Gateway server ready at ${url}`);
})();
