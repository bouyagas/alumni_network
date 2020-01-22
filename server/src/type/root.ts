import { gql } from 'apollo-server';

export default gql`
  type Query
  type Mutation
  schema {
    query: Query
    mutation: Mutation
  }
`;
