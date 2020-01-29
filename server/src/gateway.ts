import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import { serverConfig } from './serverConfig';
import { getUserFromToken } from './utils/auth';
class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  public willSendRequest({ request, context }: any): void {
    request.http.headers.set('Authorization', context.user);
  }
}
export const gateway = new ApolloGateway({
  serviceList: [
    { name: 'user', url: 'http://localhost:7001/graphql' },
    { name: 'post', url: 'http://localhost:7002/graphql' },
    { name: 'profile', url: 'http://localhost:7003/graphql' },
  ],
  buildService({ url }: any) {
    return new AuthenticatedDataSource({ url });
  },
});

(async () => {
  const { schema, executor } = await gateway.load();
  const server = new ApolloServer({
    context: ({ req }) => {
      const token = req.headers.authorization;
      console.log('token cool ' + token);
      const user: any = getUserFromToken(token);
      console.log(user);
      return { user };
    },
    executor,
    schema,
    subscriptions: false,
    tracing: true,
  });

  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Gateway server ready at ${url}`);
})();
