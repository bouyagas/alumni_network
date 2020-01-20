import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { resolvers } from './profile.resolvers';
import { typeDefs } from './profile.typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      // @ts-ignore
      resolvers,
      typeDefs,
    },
  ]),
});

server.listen({ port: 7003 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
