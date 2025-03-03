import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Represents a Pokémon's attack types */
export type Attack = {
  __typename?: 'Attack';
  /** The damage of this Pokémon attack */
  damage?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon attack */
  name?: Maybe<Scalars['String']['output']>;
  /** The type of this Pokémon attack */
  type?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon */
export type Pokemon = {
  __typename?: 'Pokemon';
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The classification of this Pokémon */
  classification?: Maybe<Scalars['String']['output']>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Array<Maybe<Pokemon>>>;
  fleeRate?: Maybe<Scalars['Float']['output']>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<Scalars['Int']['output']>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<Scalars['Int']['output']>;
  /** The name of this Pokémon */
  name?: Maybe<Scalars['String']['output']>;
  /** The identifier of this Pokémon */
  number?: Maybe<Scalars['String']['output']>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of this Pokémon */
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
};

/** Represents a Pokémon's attack types */
export type PokemonAttack = {
  __typename?: 'PokemonAttack';
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Array<Maybe<Attack>>>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Array<Maybe<Attack>>>;
};

/** Represents a Pokémon's dimensions */
export type PokemonDimension = {
  __typename?: 'PokemonDimension';
  /** The maximum value of this dimension */
  maximum?: Maybe<Scalars['String']['output']>;
  /** The minimum value of this dimension */
  minimum?: Maybe<Scalars['String']['output']>;
};

/** Represents a Pokémon's requirement to evolve */
export type PokemonEvolutionRequirement = {
  __typename?: 'PokemonEvolutionRequirement';
  /** The amount of candy to evolve */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The name of the candy to evolve */
  name?: Maybe<Scalars['String']['output']>;
};

/** Query any Pokémon by number or name */
export type Query = {
  __typename?: 'Query';
  pokemon?: Maybe<Pokemon>;
  pokemons?: Maybe<Array<Maybe<Pokemon>>>;
  query?: Maybe<Query>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Query any Pokémon by number or name */
export type QueryPokemonsArgs = {
  first: Scalars['Int']['input'];
};

export type PokemonQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type PokemonQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', id: string, number?: string | null, name?: string | null, types?: Array<string | null> | null, resistant?: Array<string | null> | null, weaknesses?: Array<string | null> | null, image?: string | null, evolutions?: Array<{ __typename?: 'Pokemon', id: string, name?: string | null, image?: string | null } | null> | null, attacks?: { __typename?: 'PokemonAttack', fast?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null, special?: Array<{ __typename?: 'Attack', name?: string | null, type?: string | null, damage?: number | null } | null> | null } | null } | null };

export type GetPokemonAllQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type GetPokemonAllQuery = { __typename?: 'Query', pokemons?: Array<{ __typename?: 'Pokemon', id: string, name?: string | null, image?: string | null } | null> | null };


export const PokemonDocument = gql`
    query pokemon($id: String, $name: String) {
  pokemon(id: $id, name: $name) {
    id
    number
    name
    types
    resistant
    weaknesses
    image
    evolutions {
      id
      name
      image
    }
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
  }
}
    `;

/**
 * __usePokemonQuery__
 *
 * To run a query within a React component, call `usePokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonQuery({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePokemonQuery(baseOptions?: Apollo.QueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
      }
export function usePokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
        }
export function usePokemonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options);
        }
export type PokemonQueryHookResult = ReturnType<typeof usePokemonQuery>;
export type PokemonLazyQueryHookResult = ReturnType<typeof usePokemonLazyQuery>;
export type PokemonSuspenseQueryHookResult = ReturnType<typeof usePokemonSuspenseQuery>;
export type PokemonQueryResult = Apollo.QueryResult<PokemonQuery, PokemonQueryVariables>;
export const GetPokemonAllDocument = gql`
    query getPokemonAll($first: Int!) {
  pokemons(first: $first) {
    id
    name
    image
  }
}
    `;

/**
 * __useGetPokemonAllQuery__
 *
 * To run a query within a React component, call `useGetPokemonAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonAllQuery({
 *   variables: {
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetPokemonAllQuery(baseOptions: Apollo.QueryHookOptions<GetPokemonAllQuery, GetPokemonAllQueryVariables> & ({ variables: GetPokemonAllQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPokemonAllQuery, GetPokemonAllQueryVariables>(GetPokemonAllDocument, options);
      }
export function useGetPokemonAllLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonAllQuery, GetPokemonAllQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPokemonAllQuery, GetPokemonAllQueryVariables>(GetPokemonAllDocument, options);
        }
export function useGetPokemonAllSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPokemonAllQuery, GetPokemonAllQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPokemonAllQuery, GetPokemonAllQueryVariables>(GetPokemonAllDocument, options);
        }
export type GetPokemonAllQueryHookResult = ReturnType<typeof useGetPokemonAllQuery>;
export type GetPokemonAllLazyQueryHookResult = ReturnType<typeof useGetPokemonAllLazyQuery>;
export type GetPokemonAllSuspenseQueryHookResult = ReturnType<typeof useGetPokemonAllSuspenseQuery>;
export type GetPokemonAllQueryResult = Apollo.QueryResult<GetPokemonAllQuery, GetPokemonAllQueryVariables>;