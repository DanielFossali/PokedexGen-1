import { useQuery } from '@tanstack/react-query';
import { fetchPokemonList, PokemonListResponse } from '../Pokemon.types';


export const usePokemonList = (limit = 151, offset = 0) => {
  return useQuery<PokemonListResponse>(
    ['pokemonList', limit, offset],
    () => fetchPokemonList(limit, offset)
  );
};
