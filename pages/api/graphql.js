import { ApolloServer } from 'apollo-server-micro';
import gql from 'graphql-tag';

const fetch = require('node-fetch');

const baseURL = 'https://api.chucknorris.io/jokes/';

// eslint-disable-next-line import/prefer-default-export
export const typeDefs = gql`

  type Category {
    name: String
  }

  type Random {
    id: String
    value: String
  }

  type Query {
    categories: [Category]
    random(cat: String): Random
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    categories: () => fetch(`${baseURL}categories`).then((res) => res.json())
      .then((data) => data.map((name) => ({ name }))),
    random: (parent, args) => {
      const { cat } = args;
      return fetch(`${baseURL}random?category=${cat}`).then((res) => res.json());
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({ path: '/api/graphql' });
