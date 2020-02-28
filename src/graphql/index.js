import { ApolloClient } from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import {
  fragmentCacheRedirect,
  fragmentLinkState,
} from "apollo-link-state-fragment"
import apolloLogger from "apollo-link-logger"
import { onError } from "apollo-link-error"
import { ApolloLink } from "apollo-link"
import { HttpLink } from "apollo-link-http"

/* set up apollo graphql client */
const graphqlEndpoint = () => {
  const httpProtocol = process.env.GATSBY_HTTP_PROTOCOL || `https`

  return `${httpProtocol}://${process.env.GATSBY_GRAPHQL_URL}`
}

const cache = new InMemoryCache({
  cacheRedirects: {
    Query: {
      ...fragmentCacheRedirect(),
    },
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.info(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) {
    console.info(`[Network error]: ${networkError}`)
  }
})

/* create apollo client */
export default function createApolloClient() {
  const batchHttpLink = new HttpLink({
    uri: graphqlEndpoint(),
  })

  let links = [errorLink, fragmentLinkState(cache)]

  if (process.env.NODE_ENV === `development`) {
    links = [apolloLogger, ...links]
  }

  const apolloClient = new ApolloClient({
    link: ApolloLink.from([...links, batchHttpLink]),
    cache,
  })

  return apolloClient
}
