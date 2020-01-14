import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { resolver } from './post.resolvers';
import { typeDefs } from './post.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolver,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
