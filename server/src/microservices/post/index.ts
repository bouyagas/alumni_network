import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './post.resolvers';
import { typeDefs } from './post.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolvers,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
