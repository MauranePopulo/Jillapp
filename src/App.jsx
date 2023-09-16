import PokemonCards from "./components/PokemonCards";
import { useState, useEffect } from "react";
import NavBaar from "./components/NavBaar";


function App() {
  useEffect(
    () => {
    alert("hello pokemon trainer :)");
    },
    []
  );
  const [pokemonIndex, setpokemonIndex] = useState(0);
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

  
    const handlePreviousClick = () => {
      if (pokemonIndex > 0) {
            const previousPokemon = pokemonList[pokemonIndex - 1].firstName;
            setpokemonIndex(pokemonIndex - 1);
            if (previousPokemon === "pikachu") {
              alert("pika pikachu !!!");
        }
      }
    };

  // const handlePreviousClick=()=>{
  //   if (pokemonIndex > 0)
  //   setpokemonIndex(pokemonIndex -1)    
  // }

  // const handleNextClick=()=>{
  //   if (pokemonIndex < pokemonList.length - 1) 
  //   setpokemonIndex(pokemonIndex +1) 
  
  // }

  const handleNextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
          const nextPokemon = pokemonList[pokemonIndex + 1].firstName;
          setpokemonIndex(pokemonIndex + 1);
          if (nextPokemon === "pikachu") {
            alert("pika pikachu !!!");
          }
    }
  };
  
  return ( <div>
    <PokemonCards pokemon={pokemonList[pokemonIndex]}/>
    <NavBaar handlePreviousClick={handlePreviousClick} handleNextClick={handleNextClick} />
      </div> 
  );
}

export default App;