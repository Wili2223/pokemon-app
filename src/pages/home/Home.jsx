import React, { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PokemonList from '../../components/PokemonList/PokemonList';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const appName = 'Pokemon App';

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=4');
        const data = await response.json();

        // Fetch additional details for each Pokémon, including their image
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetails = await fetch(pokemon.url);
            const pokemonData = await pokemonDetails.json();
            return {
              name: pokemon.name,
              image: pokemonData.sprites.front_default, // Get the image URL
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };
    fetchPokemons();
  }, []);

  return (
    <>
      <header>
        <h1>{appName}</h1>
      </header>

      <main>
        <PokemonList pokemons={pokemons} />
      </main>
    </>
  );
}



