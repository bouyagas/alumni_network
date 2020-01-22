import { ApolloServer } from 'apollo-server';
import { serverConfig } from './serverConfig';
import { getUserFromToken } from './utils/auth';
import { merge } from 'lodash';

(async () => {
  const server = new ApolloServer({
    context: ({ req }) => {
      const token = req.headers.authorization;
      console.log('token cool ' + token);
      const user: any = getUserFromToken(token);
      console.log(user);
      return { user };
    },
    subscriptions: false,
    tracing: true,
  });

  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Gateway server ready at ${url}`);
})();
