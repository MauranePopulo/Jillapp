/* eslint-disable react/prop-types */
function NavBaar ({showcasePokemon, pokemonList }) {
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
      </ul>
    </>
)
}

export default NavBaar;
