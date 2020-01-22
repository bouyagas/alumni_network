import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { merge } from 'lodash';
import { serverConfig } from './serverConfig';
import { postResolvers } from './type/post/post.resolvers';
import { postTypeDefs } from './type/post/post.typeDefs';
import { profileResolvers } from './type/profile/profile.resolvers';
import { profileTypeDefs } from './type/profile/profile.typeDefs';
import { rootTypeDefs } from './type/root';
import { userResolvers } from './type/user/user.resolvers';
import { userTypeDefs } from './type/user/user.typeDefs';
import { getUserFromToken } from './utils/auth';

const schema = makeExecutableSchema({
  // @ts-ignore
  rosolvers: merge({}, userResolvers, postResolvers, profileResolvers),
  typeDefs: [rootTypeDefs, userTypeDefs, postTypeDefs, profileTypeDefs],
});

(async () => {
  const server = new ApolloServer({
    context: ({ req }) => {
      const token = req.headers.authorization;
      console.log('token cool ' + token);
      const user: any = getUserFromToken(token);
      console.log(user);
      return { user };
    },
    schema,
    subscriptions: false,
    tracing: true,
  });

  const { url } = await server.listen({ port: serverConfig.port });
  console.log(`GQL 🚀 Gateway server ready at ${url}`);
})();
