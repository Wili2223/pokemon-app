import React, { useEffect, useState } from "react";

export default function PokemonDetail({ pokemonId }) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch Pokémon details from an API
        const fetchPokemon = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
                setPokemon(data);
            } catch (error) {
                console.error("Error fetching Pokémon details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [pokemonId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokemon) {
        return <div>Pokemon not found</div>;
    }

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>{pokemon.name.toUpperCase()}</h1>
            <img
                src={pokemon.sprites?.other["official-artwork"].front_default}
                alt={pokemon.name}
                style={{ width: "200px", height: "200px" }}
            />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <h3>Abilities:</h3>
            <ul>
                {pokemon.abilities.map((ability, index) => (
                    <li key={index}>{ability.ability.name}</li>
                ))}
            </ul>
        </div>
    );
}