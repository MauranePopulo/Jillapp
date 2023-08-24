import PokemonCards from "./components/PokemonCards";


function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  return (
    <div>
      <PokemonCards pokemon={pokemonList[0]}/> 
      <PokemonCards pokemon={pokemonList[1]}/> 

    </div>
  );
}

export default App;


