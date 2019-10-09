import React from 'react';

const Arrow = (props) => (
  <div className="icon">
    <svg height={props.height} width={props.width} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <title>Icon Arrow</title>
      <path fill="" d="m983.3 484.4-222.7-222.7c-4.5-4.5-8.9-6.7-15.6-6.7-13.4 0-22.3 8.9-22.3 22.3 0 6.7 2.2 11.1 6.7 15.6l184.9 184.9h-882c-13.4 0-22.3 8.9-22.3 22.3s8.9 22.3 22.3 22.3h882l-184.9 184.7c-4.5 4.5-6.7 8.9-6.7 15.6 0 13.4 8.9 22.3 22.3 22.3 6.7 0 11.1-2.2 15.6-6.7l222.7-222.7c4.5-4.5 6.7-8.9 6.7-15.6s-2.2-11.1-6.7-15.6z" />
    </svg>
    <style jsx>
      {`
      .icon svg {
        fill: var(--primary);
      }
      @media screen and (max-width: 576px) {
        .icon {
          display: none;
        }
      }
      `}
    </style>
  </div>
);

export default Arrow;
