import React, { useEffect, useState} from 'react';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import PokemonList from '../components/PokemonList/PokemonList';

export default function Home() {
    const [pokemons, setPokemons] = useState([]);
    const appName = 'Pokemon App';
  
    useEffect(() => {
        const fetchPokemons = async () => {
            try {
              const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5');
              const data = await response.json();
              setPokemons(data.results);
          } catch (error) {
              console.error("Error fetching Pokémon:", error);
          }
        }
        fetchPokemons();
    }, []);


    return (

        <>
            <header>
                <h1>{appName}</h1>
            </header>

            <main>
              <PokemonList pokemons={pokemons} />
               {/* <button onClick={() => setPokemons([])}>Hide Pokémons</button> */}
            </main>
        </>

    );
}


/*import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const appName = 'Pokemon App';

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
      .then((res) => res.json())
      .then(async (data) => {
        const detailedPokemons = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              name: details.name,
              type: details.types[0].type.name,
              imageUrl: details.sprites.other['official-artwork'].front_default
            };
          })
        );
        setPokemons(detailedPokemons);
      })
      .catch((err) => console.error('Error fetching pokemons:', err));
  }, []);

  return (
    <>
      <header>
        <h1>{appName}</h1>
      </header>

      <main>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      </main>
    </>
  );
}
*/
