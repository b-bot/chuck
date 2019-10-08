import React from 'react';
import { B, GitHub } from './index';

export default () => (
  <footer>
    <div className="social">
      <B width="24px" height="24px" padding="0 10px" url="https://b-b0t.com/" />
      <GitHub width="24px" height="24px" padding="0 10px" url="https://github.com/b-b0t/chuck" />
    </div>
    <style jsx>
      {`
      footer {
        background: var(--accent);
        position: absolute;
        min-width: 600px;
        bottom: 0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .social {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
        position: relative;
      }
      .social > div {
        flex: 1;
      }
      @media screen and (max-width: 768px) {

      }
      `}
    </style>
  </footer>
);
