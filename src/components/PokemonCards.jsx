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

function PokemonCards() {
  const pokemon = pokemonList[0]
  console.log(pokemon.imgSrc)
    return (
      <div>
        <figure> {pokemon.imgSrc === undefined ? "???" : <img src= {pokemon.imgSrc} alt={pokemon.name}/>}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  
  export default PokemonCards;
