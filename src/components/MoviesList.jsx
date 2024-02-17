'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';


import '@material/web/button/elevated-button.js';


export default  function  MoviesList () {
  
  const [ filmList, setFilmList] = useState([]);

  const router = useRouter();

  function getMoviesTrending (){
    const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDI4MjljYzJhYjA1NzEzN2YwYjFhNjUyODIyZGRjMSIsInN1YiI6IjY0NjIzY2Y0YTY3MjU0MDE0MzY3OTg0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMo-QLURYym64cQwBvxKqT6lsNlznrN4B1BjULAfc6o'
          }
        };

    fetch('https://api.themoviedb.org/3/trending/movie/day?language=es-AR', options)
      .then(response => response.json())
      .then(response => setFilmList(response.results))
      .catch(err => console.error(err));
      
}


  useEffect(() => {
    getMoviesTrending();
  }, []);

  return(
    <>
      {
        filmList.map((movie, id)=>{
          return <div key={id} className="grid grid-rows-[1fr_0.3fr_0.1fr] bg-secondaryContainer shadow-md rounded-xl  h-full gap-3">
            <div className="row-start-1 row-end-2 rounded-xl w-full max-h-72">
              <img className="object-cover max-h-72 w-full rounded-xl" src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.id} />
            </div>
            <div className="p-1 row-start-2 row-end-3" >
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">{movie.original_title}</p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal opacity-75">{movie.overview.substring(0, 80)}</p>
            </div>
            <div className="row-start-3 row-end-4 p-2">
                <md-elevated-button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs p-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                  onClick={() => router.push(`/${movie.id}`)}>
                  Detalles
                </md-elevated-button>
              </div> 
          </div>
        })
      }
    </>
  )
}
