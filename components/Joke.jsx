import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Arrow, Loader } from './index.ts';

// Create GraphQL queries

const GET_CATEGORIES = gql`
  {
    categories {
      name
    }
  }
`;

const GET_JOKE = gql`
  query Joke($category: String) {
    random(category: $category) {
      value
    }
  }
`;

// Request data via @apollo/react-hooks

function Categories({ onCategorySelected }) {
  const {
    loading,
    error,
    data: { categories },
  } = useQuery(GET_CATEGORIES);
  if (loading) return <Loader />;
  if (error) return `Error! ${error.message}`;
  return (
    <div className="joke">
      <div><p>Change Category</p></div>
      <div><Arrow height="40px" width="50px" /></div>
      <div>
        <select name="category" onChange={onCategorySelected}>
          {categories.map((category, id) => (
            <option className="name" key={id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <style jsx>
        {`
        .joke {
          flex: 1;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 40px;
        }
        p {
          font-size: 20px;
          font-weight: 600;
          line-height: 40px;
          height: 40px;
          text-transform: uppercase;
          margin: 0;
        }
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          text-align-last: center;
          text-align: -webkit-center;
          min-width: 200px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          height: 42px;
          text-transform: uppercase;
          border: 2px solid var(--fg);
          background: var(--bg);
          color: var(--fg);
        }
        .name {
          text-transform: uppercase;
        }
        select:hover {
          color: var(--primary);
          border: 2px solid var(--primary);
          cursor: pointer;
        }
        @media screen and (max-width: 576px) {
          .joke {
            margin-top: 40px;
            flex-direction: column;
            justify-content: center;
          }
          select {
            padding: 8px;
            max-width: 200px;
            margin: 10px auto;
          }
        }
      `}
      </style>
    </div>
  );
}

function Random({ category }) {
  const {
    loading,
    error,
    data: { random },
    refetch,
    networkStatus,
  } = useQuery(GET_JOKE, {
    variables: { category },
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === 4) return <Loader />;
  if (loading) return <Loader />;
  if (error) return `${error}`;

  return (
    <div className="result">
      <p>{random.value}</p>
      <button type="button" onClick={() => refetch()}>Get New Joke</button>
      <style jsx>
        {`
        .result {
          background: var(--bg);
          padding-bottom: 40px;
        }
        p {
          font-size: 16px;
          font-weight: 300;
          line-height: 22px;
          text-align: center;
          margin: 20px auto;
          max-width: 400px;
          padding: 0 20px;
        }
        button {
          min-width: 200px;
          margin: 0 auto;
          display: block;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          height: 40px;
          text-transform: uppercase;
          background: var(--bg);
          color: var(--fg);
          border: 2px solid var(--fg);
          border-radius: 2px;
          transition: transform .2s;
          
        }
        button:hover {
          color: var(--bg);
          background: var(--primary);
          border: 2px solid var(--primary);
          cursor: pointer;
          transform: scale(1.1);
        }
      `}
      </style>
    </div>
  );
}

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: 'animal' };
  }

  // Re-render with updated state

  onCategorySelected = ({ target }) => {
    this.setState(() => ({ selectedCategory: target.value }));
  };

  render() {
    return (
      <div className="generator">
        <div>
          <Categories onCategorySelected={this.onCategorySelected} />
        </div>
        <div>
          {this.state.selectedCategory && (
            <Random category={this.state.selectedCategory} />
          )}
        </div>
        <style jsx>
          {`
          .generator {
            border-radius: 5px;
            margin-top: 40px;
          }
          .generator > div {
            position: relative;
            min-height: 100px;
          }
          @media screen and (max-width: 576px) {
            .generator {
              flex-direction: column;
              text-align: center;
            }
            .generator > div{
              flex: 0 0 100%;
            }
          }
        `}
        </style>
      </div>
    );
  }
}

export default Joke;
