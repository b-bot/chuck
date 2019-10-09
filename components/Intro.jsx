import React from 'react';

export default () => (
  <div className="intro">
    <img className="logo" src="/static/logo.png" alt="chucknorris" />
    <h1>
      An interactive GraphQL wrapper for the
      <a href="https://chucknorris.io" target="_blank" rel="noopener noreferrer"> chucknorris.io </a>
      API
    </h1>
    <style jsx>
      {`
      .intro {
        background: var(--accent);
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      h1 {
        padding: 0 20px;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 40px;
      }
      .logo{
        max-width: 12rem;
        margin: 2rem auto;
        display: block;
      }
      @media screen and (max-width: 576px) {
        .logo{
          max-width: 8rem;
          margin: 2rem auto;
          display: block;
        }
        .intro {
          background: var(--accent);
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
      `}
    </style>
  </div>
);
