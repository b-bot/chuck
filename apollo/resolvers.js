const fetch = require('node-fetch');

const baseURL = 'https://api.chucknorris.io/jokes/';

// eslint-disable-next-line import/prefer-default-export
export const resolvers = {
  Query: {
    categories: () => fetch(`${baseURL}categories`).then((res) => res.json())
      .then((data) => data.map((name) => ({ name }))),
    random: (parent, args) => {
      const { category } = args;
      return fetch(`${baseURL}random?category=${category}`).then((res) => res.json());
    },
  },
};
