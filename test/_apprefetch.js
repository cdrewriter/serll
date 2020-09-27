import React from 'react';
import 'cross-fetch/polyfill';
import './styles.scss';
import PageLayout from '../templates/PageLayoutm';
import { ClientContext } from 'graphql-hooks'
import { useGraphQLClient } from '../lib/graphql-client'

export default function App({ Component, pageProps }) {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)

  return (
    <ClientContext.Provider value={graphQLClient}>
        <PageLayout id="catalog-cars">
          <Component {...pageProps} />
      </PageLayout>
    </ClientContext.Provider>
  )
}