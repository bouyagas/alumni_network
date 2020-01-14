import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { resolver } from './profile.resolvers';
import { typeDefs } from './profile.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolver,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7003 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
