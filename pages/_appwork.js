import App from 'next/app';
import React from 'react';
import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import './styles.scss';
import '../templates/theme';
import Head from 'next/head';
class MyApp extends App {
  
  render() {
    
    const { Component, pageProps, graphql } = this.props;
    
    return (
      <GraphQLProvider graphql={graphql}>
            <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <meta name="theme-color" content="white" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jaydenseric" />
      <meta name="twitter:creator" content="@jaydenseric" />
      <link rel="icon" sizes="192x192" href="/static/icon.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
         <Component {...pageProps} />
      
      </GraphQLProvider>
    );
  }
}

export default withGraphQLApp(MyApp);
