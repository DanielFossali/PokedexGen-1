import React from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { Pokemon } from '../Pokemon.types';


interface PokemonListProps {
  pokemon: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map((p) => (
        <PokemonCard key={p.name} name={p.name} />
      ))}
    </div>
  );
};

export default PokemonList;
