import React from 'react';
import Head from 'next/head';
import { withApollo } from '../apollo/client';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Joke from '../components/Joke';

const Index = () => (
  <div>
    <Head>
      {/* Meta */}
      <link rel="icon" type="image/ico" sizes="60x60" href="/static/favicon.ico" />
      <title>Chuck | GraphQL Wrapper for api.chucknorris.io</title>
      <meta charSet="utf-8" />
      <meta name="author" content="Byron Polley" />
      <meta name="keywords" content="byron, polley, byron polley, b-b0t, b-bot, b, software, software engineering, web, web development, web design, developer, javascript, node, html, css, graphql, react, chuck, norris" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="GraphQL wrapper for chucknorris.io API." />
      <meta name="theme-color" content="#2a2a2a" />
      <link rel="stylesheet" href="https://use.typekit.net/lqv1kpu.css" />
    </Head>
    <div className="wrapper">
      <Intro />
      <Joke />
      <Footer />
    </div>
    <style jsx global>
      {`
      :root {
        --fg: #a9a9a9;
        --bg: #2a2a2a;
        --accent: #202020;
        --primary: #f15a24;
        --font: canada-type-gibson, sans-serif;
      }
      @media (prefers-color-scheme: light) {
        :root {
          --fg: #535353;
          --bg: #f4f5f5;
          --accent: #ffffff;
        }
      }
      body {
        background-color: var(--bg);
        color: var(--fg);
        font-family: canada-type-gibson;
        transition: 300ms ease-in-out;
        margin: 0;
      }
      a {
        color: var(--primary);
        text-decoration: none;
      }
      a:hover {
        cursor: pointer;
      }
      select {
        text-align: center !important;
      }
      .wrapper {
        margin: 0 auto;
        width: 100%;
        max-width: 578px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
    `}
    </style>
  </div>
);

export default withApollo(Index);
