function NavBaar ({ handlePreviousClick, handleNextClick }) {
return (<>
<button onClick={handlePreviousClick} > Précédent </button>
<button onClick={handleNextClick} > Suivant </button>
</>)
}

export default NavBaar;
