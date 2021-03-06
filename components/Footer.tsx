import React from 'react';
import { B, GitHub } from './index';

export default () => (
  <footer>
    <p>
      The GraphQL playground has been left active. Readme provided at the GitHub repository below.
    </p>
    <div className="social">
      <B width="24px" height="24px" url="https://b-b0t.com/" />
      <GitHub width="24px" height="24px" url="https://github.com/b-b0t/chuck" />
    </div>
    <style jsx>
      {`
      footer {
        background: var(--accent);
        width: 100%;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        margin-top: auto;
      }
      p {
        margin: 40px auto 20px;
        padding: 0 20px;
        text-align: center;
        line-height: 20px;
        max-width: 300px;
      }
      .social {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        position: relative;
      }
      @media screen and (max-width: 576px) {
        footer {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
      }
      `}
    </style>
  </footer>
);
