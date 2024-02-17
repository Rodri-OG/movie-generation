'use client'
import { useEffect, useState } from "react";
import GenreSelected from "./GenreSelected"
import MoviesListWatch from "./MoviesListWatch"
import '@material/web/button/elevated-button.js';



export default function MovieRecommendation () {

  const [ selected, setSelected ] = useState(false);
  const [ genId, setGenId] = useState(0);

  /* Función que controla el evento onClick y setea el estado de genId con el id del genero clickeado  */
  function handleClick (event){
    setGenId(event);
  }

  /* cambia el estado de selected a true para renderizar el componente MoviesLisWatch */
  useEffect(() => {
    if (genId !== 0) {
    setSelected(true)
  }
  }, [genId]);



  return(
    <>
      
    <div className="grid grid-cols-1 grid-rows-[0.01fr_1fr] w-full overflow-hidden gap-4 bg-surfaceVariant  rounded-lg ">
      <button 
        className="flex justify-self-start  p-3 rounded-lg hover:bg-onPrimary outline-none"
        onClick={() => setSelected(false)}>
        <span className="material-icons flex items-center">arrow_back_ios</span>
      </button>
     {!selected
      ? <div className={`${ selected && "transition-all translate-y-40 duration-700" }`} > <GenreSelected handleClick={handleClick} /></div>
      : <div className={`${ !selected && "transition-all translate-y-40 duration-700" }`} ><MoviesListWatch genId={genId}/></div>
      }
    </div>
       
    </>
  )
}
