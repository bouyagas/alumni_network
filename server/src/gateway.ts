import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from './serverConfig';
import { connect } from './serverConfig/db';

export const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:7001/graphql' },
    { name: 'posts', url: 'http://localhost:7002/graphql' },
    { name: 'profiles', url: 'http://localhost:7003/graphql' },
  ],
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({
    executor,
    schema,
  });
  await connect(serverConfig.mongoDbUrl);
  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Server ready at ${url}`);
})();
