import {useState} from "react";
import PokemonCard from "../PokemonCard/PokemonCard";

export default function PokemonList({ pokemons }) {
    const [isClicked, setIsClicked] = useState(false);
    const [pokemonsSelected, setPokemonsSelected] = useState([]);

    const handleClickPokemon = (pokemon) => {
         const newPokemonsSelected = [...pokemonsSelected, pokemon];
            setPokemonsSelected(newPokemonsSelected);
         };

         const handleDeselect = (name) => {
            const newPokemonsSelected = pokemonsSelected.filter(p => p.name !== name);
            setPokemonsSelected(newPokemonsSelected);
         };

    return (
    <>
       <div className= "pokemon-list" style={{ display: 'flex', gap: '20px' }}>
    {pokemons.map((pokemon) => (
        <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            type={pokemon.type}
            imageUrl={pokemon.imageUrl}
            onClickPokemon={handleClickPokemon}
            pokemonSelected={pokemonsSelected}
        />
    ))}
    <button onClick={() => setIsClicked(true)}>Click Pokémons List</button>
    { isClicked && <p>Pokémons List Clicked!</p> }
  
    </div>
       
         <div>
        <h2>Team Pokemon Selected</h2>
        <ul>
          {pokemonsSelected.map(pokemon => (
            <li key={pokemon.name} onClick={() => handleDeselect(pokemon.name)}>
                {pokemon.name}
            </li>
        ))}
        </ul>

        <button onClick={() => setPokemonsSelected([])}>Clear Team</button>
        </div>
       
    </>
    );
}