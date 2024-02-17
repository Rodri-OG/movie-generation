import '@material/web/list/list.js';
import Image from 'next/image'

async function getMovieData (movie_id){ 
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDI4MjljYzJhYjA1NzEzN2YwYjFhNjUyODIyZGRjMSIsInN1YiI6IjY0NjIzY2Y0YTY3MjU0MDE0MzY3OTg0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dMo-QLURYym64cQwBvxKqT6lsNlznrN4B1BjULAfc6o'
    }
  };
  
   const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=es-AR`, options)
    

    return await response.json();

  }
export default async function Page({ params }) {
  const movie_id = params.id;
  

  const movieDetails = await getMovieData(movie_id);
  
  const imageStyle = {
    borderRadius: "2rem",
    objectFit:"contain",
    padding: "1rem"
  }
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-1  gap-4 p-4 m-4 w-full h-full place-content-center bg-primaryContainer shadow-md bg-clip-border rounded-xl ">
        <div className="col-span-1 row-span-2 gap-4 p-4 place-content-center rounded-xl">
          
          <Image  
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} 
              alt={movieDetails.id}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-xl  p-4"
              style={imageStyle}
              />
        </div>

        <div className="grid grid-cols-1 grid-rows-6 gap-4 p-4 max-h-full ">

          <div className="row-start-1 row-end-2 ">
            <h1 className="text-base antialiased font-extrabold uppercase ">{movieDetails.original_title}
              <h3 className="text-sm antialiased font-normal ">{`(${movieDetails.release_date.slice(0,4)})`}</h3>
            </h1>
          </div>

            <div className="row-start-2 row-end-3">
              <h3 className="text-base antialiased font-bold">
                Resumen
                <p className="text-sm antialiased font-normal ">{movieDetails.overview}</p>
              </h3>
            </div>
          
          <div className="row-start-3 row-end-4">
            <h4 className=" text-base antialiased font-bold ">Valoración:
              <p className="text-sm antialiased font-normal ">{`${Math.floor(movieDetails.vote_average)}`} Puntos </p> 
            </h4>  
          </div>
        
          <div className="row-start-4 row-end-5">
              <h4 className="text-base antialiased font-bold ">Fecha de estreno:
                <p className="text-sm antialiased font-normal ">{ movieDetails.release_date }</p>
              </h4>
          </div>
        

          <div className="row-start-5 row-end-6">
            <h4 className="text-base antialiased font-bold ">Generos: 
              <p className="text-sm antialiased font-normal "> {movieDetails.genres.map( oneGenre => <li key={oneGenre.id} className="list-none">{ oneGenre.name }</li> )}</p>
            </h4>
          </div>

        
        </div>
      </div>

    </>
  )
}