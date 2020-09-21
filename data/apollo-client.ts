import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://app-resta.herokuapp.com/v1/graphql',
  cache: new InMemoryCache()
});