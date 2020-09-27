import React from 'react';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../templates/theme';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import './styles.scss';


function MyApp(props) {
  const { Component, pageProps, graphql } = props;

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
      </Head>

      <GraphQLProvider graphql={graphql}>
     
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
       
          <Component {...pageProps} />
        </ThemeProvider>
      </GraphQLProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withGraphQLApp(MyApp);
