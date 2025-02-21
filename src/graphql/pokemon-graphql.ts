import { ApolloClient, InMemoryCache } from '@apollo/client'

export const pokemonGraphql = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_POKEMON_GRAPHQL_API,
  cache: new InMemoryCache()
})
