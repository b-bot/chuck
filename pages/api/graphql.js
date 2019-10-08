import { ApolloServer } from 'apollo-server-micro';
import { typeDefs } from '../../apollo/type-defs';
import { resolvers } from '../../apollo/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  upload: false,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
