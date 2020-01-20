import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './user.resolvers';
import { typeDefs } from './user.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolvers,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
