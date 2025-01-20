import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export const fetchPokemonList = async (limit = 151, offset = 0): Promise<PokemonListResponse> => {
  const { data } = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return data;
};
