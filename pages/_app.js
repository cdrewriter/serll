
import React from 'react';
import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

import  theme from  '../templates/theme';
import Head from 'next/head';


import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';



function MyApp(props) {
  const { Component, pageProps, graphql, styling } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
     
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
  
       <GraphQLProvider graphql={graphql}>   
      
         <Component { ...pageProps} { ...styling } />
      
   
      

         </GraphQLProvider>
     
      </React.Fragment>
   
  );
}


MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withGraphQLApp(MyApp);