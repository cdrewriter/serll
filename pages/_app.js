import React from 'react';
import NextApp from 'next/app';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider as MaterialThemeProvider } from '@material-ui/core/styles';
import theme from '../templates/theme';
import './styles.scss';

class MyApp extends NextApp {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { Component, pageProps, graphql } = this.props;
    return (
     <>
      <CssBaseline /> 
          <StyledThemeProvider theme={theme}>           
              <MaterialThemeProvider theme={theme}>             
                <GraphQLProvider graphql={graphql}>
            <Head>
              <title>My page</title>
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

            <Component {...pageProps} />
            </GraphQLProvider>
            </MaterialThemeProvider>
      </StyledThemeProvider>
       </>
    
    );
  }
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withGraphQLApp(MyApp);
