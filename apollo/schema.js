import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs } from './type-defs.ts';
import { resolvers } from './resolvers.ts';

// eslint-disable-next-line import/prefer-default-export
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  upload: false,
});
