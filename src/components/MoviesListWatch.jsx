'use client'

import { Suspense, useEffect, useState } from 'react'
import Loading from '@/components/Loading';



//Styles
import '@material/web/button/elevated-button.js';
import CardSmall from './CardSmall';

export default function MoviesListWatch (props){

  const [ moviesListGenres, setMoviesListGenres] = useState([]);
  const [ randomNumber, setRandomNumber ] = useState(12);
  

  let genId = props.genId.toString();


  /* función que obtiene un número al azar entre 1 y 20 */
  function getRandomNumber () {
    let max = 20;
    let min = 1;

    return Math.floor(Math.random()*(max-min+1)+min)
  }


  function getMoviesGenres (){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDI4MjljYzJhYjA1NzEzN2YwYjFhNjUyODIyZGRjMSIsInN1YiI6IjY0NjIzY2Y0YTY3MjU0MDE0MzY3OTg0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMo-QLURYym64cQwBvxKqT6lsNlznrN4B1BjULAfc6o'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=es-AR&page=1&sort_by=popularity.desc&with_genres=${genId}`, options)
      .then(response => response.json())
      .then(response => setMoviesListGenres(response.results))
      .catch(err => console.error(err));
  }

  
  /* 
  -Se usa el useEffect para llamar a la función que contiene el fetch y obtener las peliculas del género seleccionado.
  -Se llama a la función que obtiene un numero al azar.  */
  useEffect(() => {
    getMoviesGenres();
    setRandomNumber(getRandomNumber);

  }, [genId]);

 

  return(
    <>
      <h1 className="text-center m-2 p-2">Esta es la película para ver hoy</h1>
      <Suspense fallback={<Loading/>}>
        <div className="grid place-content-center m-2 p-2">
          {moviesListGenres.length >= 1 ? <CardSmall key={moviesListGenres[randomNumber].id} params={moviesListGenres[randomNumber]}/> : <div>Cargando recomendación...</div>}
        </div>
      </Suspense>

    </>
  )
};