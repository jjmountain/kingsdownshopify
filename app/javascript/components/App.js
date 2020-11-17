import React from "react"
import PropTypes from "prop-types"
import { authenticatedFetch } from '@shopify/app-bridge-utils';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

import { AppProvider, EmptyState, Page } from '@shopify/polaris';
import TestData from './TestData'

import enTranslations from '@shopify/polaris/locales/en.json';

export default function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      credentials: 'same-origin',
      fetch: authenticatedFetch(window.app), // created in shopify_app.js
      uri: '/graphql'
    }),
    cache: new InMemoryCache()
  });

  return (
    <AppProvider i18n={enTranslations}>
      <ApolloProvider client={client}>
        <Page>
          <EmptyState>
            <TestData/> 
            Hullo
          </EmptyState>
        </Page>
      </ApolloProvider>
    </AppProvider>
  );
}
