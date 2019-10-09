import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Arrow, Loader } from './index';

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
      <p>Change Category</p>
      <Arrow height="40px" width="50px" />
      <select name="category" onChange={onCategorySelected}>
        {categories.map((category, id) => (
          <option key={id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
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
          min-width: 200px;
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 1px;
          height: 40px;
          text-transform: uppercase;
          border: 1px solid var(--fg);
          background: var(--bg);
          color: var(--fg);
        }
        select:hover {
          color: var(--primary);
          border: 1px solid var(--primary);
          cursor: pointer;
        }
        @media screen and (max-width: 576px) {
          .joke {
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
        }
        p {
          font-size: 16px;
          font-weight: 300;
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
          border: 1px solid var(--fg);
          border-radius: 2px;
        }
        button:hover {
          color: var(--primary);
          border: 1px solid var(--primary);
          cursor: pointer;
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
