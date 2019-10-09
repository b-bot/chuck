import React from 'react';

export default () => (
  <div className="loader">
    <img src="/static/loader.gif" alt="chucknorris" />
    <style jsx>
      {`
      .loader {
        position: relative;
        width: 100%;
        height: 100%;
      }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      @media screen and (max-width: 768px) {

      }
      `}
    </style>
  </div>
);
