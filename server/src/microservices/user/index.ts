import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { resolver } from './user.resolvers';
import { typeDefs } from './user.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolver,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
