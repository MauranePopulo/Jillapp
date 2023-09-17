import PokemonCards from "./components/PokemonCards";
import { useState } from "react";
import NavBaar from "./components/NavBaar";

export default function App() {
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const showcasePokemon = (pokemon) => {
    setpokemonIndex(pokemon.filter((index) => index !== pokemon));
  };
  const pokemonList = [
    {
        firstName: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        firstName: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        firstName: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        firstName: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        firstName: "mew",
      },
    ];

  // const handlePreviousClick=()=>{
  //   if (pokemonIndex > 0)
  //   setpokemonIndex(pokemonIndex -1)
  // }

  // const handleNextClick=()=>{
  //   if (pokemonIndex < pokemonList.length - 1) 
  //   setpokemonIndex(pokemonIndex +1) 
  // }
  
  return ( <div>
    <PokemonCards pokemon={pokemonList[pokemonIndex]}/>
    <NavBaar pokemonList={pokemonList} showcasePokemon={showcasePokemon} />
      </div> 
  );
}