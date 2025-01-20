import React from 'react';

interface PokemonCardProps {
  name: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  return (
    <div className="pokemon-card">
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
