/* eslint-disable react/prop-types */
function NavBaar ({pokemonList, setpokemonIndex }) {
return (

<>
      <h1>PokemonGo</h1>
      <ul>
        {pokemonList.map((pokemon, index) => (
            <li key={pokemonList.firstName}>
                <input type="text" defaultValue={pokemon.firstName} />
                <button onClick={() => setpokemonIndex(index)}>poke</button>
          </li>
        ))}
      </ul>
    </>
)
}

export default NavBaar;


{/* 
function NavBaar ({showcasePokemon, setpokemonIndex }) {
return (

<>
      <h1>PokemonGo</h1>
      <ul>
{pokemonList.map((pokemon) => (
    <li key={pokemonList.firstName}>
        {pokemon.imgSrc} {pokemon.firstName}
        <input type="text" defaultValue={pokemon.firstName} />
        <button onClick={() => showcasePokemon(pokemon)}>Poke</button>
  </li>
))}
</ul> */}