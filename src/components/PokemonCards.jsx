// function PokemonCards(props) {
  function PokemonCards({pokemon}) {
  // console.log(props.pokemon.name)
    return (
      <>
      <h1>{pokemon.firstName}</h1>
      <img src={pokemon.imgSrc} alt={pokemon.firstName} /></>
      // <div>
      //   <figure> {props.pokemon.imgSrc === undefined ? "???" : <img src= {props.pokemon.imgSrc} alt={props.pokemon.name}/>}
      //       <figcaption>{props.pokemon.name}</figcaption>
      //   </figure>
      // </div>
    );
  }
  import PropTypes from "prop-types";
  PokemonCards.propTypes = {
  character: PropTypes.shape({
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
}
  export default PokemonCards;

  
