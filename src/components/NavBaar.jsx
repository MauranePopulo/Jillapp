function NavBaar ({ pokemonIndex, handlePreviousClick, handleNextClick }) {
  
return (<>
{pokemonIndex === 3 ? alert("pika pikachu !!!") : null}
<button onClick={handlePreviousClick} > Précédent </button>
<button onClick={handleNextClick} > Suivant </button>
</>)
}

export default NavBaar;