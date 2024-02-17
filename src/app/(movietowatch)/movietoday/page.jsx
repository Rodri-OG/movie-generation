'use client'
import { useEffect, useState } from "react";
import GenreSelected from "@/components/GenreSelected"
import MoviesListWatch from "@/components/MoviesListWatch"


export default function MovieToDay () {

  const [ selected, setSelected ] = useState(false);
  const [ genId, setGenId] = useState(0);


  function handleClick (event){
    setGenId(event);
  }

  useEffect(() => {
    if (genId !== 0) {
    setSelected(true)
  }
  }, [genId]);



  return(
    <>
    <div className="col-start-2 col-end-3 h-full w-full p-3 overflow-scroll  text-gray-700 bg-surfaceVariant shadow-md rounded-xl transition-all duration-300 ease-in-out ">
      <div className="grid grid-cols-1 grid-rows-1 w-full overflow-hidden place-content-center">
      <button 
        className="flex justify-self-start  p-3 rounded-lg hover:bg-[#FFFFFF] outline-none"
        onClick={() => setSelected(false)}>
        <span className="material-icons flex items-center">arrow_back_ios</span>
      </button>
      {!selected
        ? <GenreSelected handleClick={handleClick} /> 
        : <MoviesListWatch genId={genId}/>
        }
      </div>
      </div>
    </>
  )
}
