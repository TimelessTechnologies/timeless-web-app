import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from 'apollo-link';


export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    createUploadLink({
        uri: 'http://timeless.local/graphql',
        // headers: {
        //     'Authorization': process.env.NEXT_PUBLIC_WP_AUTHORIZATION,
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': 'http://localhost:8000/',
        //     'Access-Control-Allow-Credentials': true,    
        //   },
        //   credentials: 'include',
        //   fetchOptions: {
        //     mode: 'no-cors'
        //   }
      })
  ]),
  cache: new InMemoryCache()
});