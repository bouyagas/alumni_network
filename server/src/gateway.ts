import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';
import { Post } from './microservices/post/post.model';
import { Profile } from './microservices/profile/profile.model';
import { User } from './microservices/user/user.model';
import { serverConfig } from './serverConfig';
import { connect } from './serverConfig/db';
import { createToken, getUserFromToken } from './utils/auth';

export const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://localhost:7001/graphql' },
    { name: 'posts', url: 'http://localhost:7002/graphql' },
    { name: 'profiles', url: 'http://localhost:7003/graphql' },
  ],
  buildService({ url }) {
    return new RemoteGraphQLDataSource({
      url,
      willSendRequest({ request, context }) {
        // pass the user's id from the context to underlying services
        // as a header called `user-id`
        // @ts-ignore
        request.http.headers.set('x-user-id', context.user);
      },
    });
  },
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({
    context: async ({ req }) => {
      if (req) {
        // get the user token from the headers
        const token = req.headers.authorization || '';

        // try to retrieve a user with the token
        const user = await getUserFromToken(token);

        // add the user to the context
        return {
          createToken,
          models: {
            Post,
            Profile,
            User,
          },
          user,
        };
      }
      return undefined;
    },
    executor,
    schema,
    subscriptions: false,
    tracing: true,
  });

  await connect(serverConfig.mongoDbUrl);
  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Server ready at ${url}`);
})();
