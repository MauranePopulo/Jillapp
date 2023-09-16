function NavBaar ({ handlePreviousClick, handleNextClick }) {
return (<>
<button onClick={handlePreviousClick} > Précédent </button>
<button onClick={handleNextClick} > Suivant </button>
</>)
}



export default NavBaar;

// function NavBar({actions}) {

//     return (

//         <div>
//           <button onClick={actions.previous}> Previous </button>
//           <button onClick={actions.next}>Next </button>
//         </div>
//       );
// }