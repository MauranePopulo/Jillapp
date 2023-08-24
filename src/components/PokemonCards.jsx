function PokemonCards(props) {
  console.log(props.pokemon.name)
    return (
      // function Cart({imgSrc,name }) {
      //   return `You bought ${product.quantity} ${product.name} for ${calculate(product)}€`;
      // }
      <div>
        <figure> {props.pokemon.imgSrc === undefined ? "???" : <img src= {props.pokemon.imgSrc} alt={props.pokemon.name}/>}
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
      </div>
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

  
