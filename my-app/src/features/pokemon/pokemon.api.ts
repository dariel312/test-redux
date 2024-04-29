import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type PokemonVM = {
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[];
  sprites: {
    front_default: string;
  }
}

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonVM, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi