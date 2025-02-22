import { ApolloClient, InMemoryCache } from '@apollo/client'

const pokemonClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_POKEMON_GRAPHQL_API,
  cache: new InMemoryCache()
})

export default pokemonClient
