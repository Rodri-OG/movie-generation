'use client'

export default function GenreSelected ({ handleClick }) {



  // Hay 19 generos
  const moviesGenres = [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
    {
      "id": 35,
      "name": "Comedia"
    },
    {
      "id": 80,
      "name": "Crimen"
    },
    {
      "id": 99,
      "name": "Documental"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familiar"
    },
    {
      "id": 14,
      "name": "Fantasía"
    },
    {
      "id": 36,
      "name": "Historia"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Misterio"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ciencia Ficción"
    },
    {
      "id": 10770,
      "name": "TV-Film"
    },
    {
      "id": 53,
      "name": "Suspenso"
    },
    {
      "id": 10752,
      "name": "Bélica"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]


  return(
    <>
        <div className="grid grid-cols-1 bg-surfaceVariant w-full shadow-md rounded-xl p-3 gap-3 ">
            
              <h1>¡Hola! </h1>
              <h2>¿No sabés que ver?</h2>
              <h2>Te recomendamos algo para que veas hoy</h2>
              <h3>Seleccioná un género:</h3>
              <div className="grid grid-cols-2 grid-rows-1  gap-2 place-content-center h-full w-full">
                {moviesGenres.map((genre, id)=>{
                  return <div key={id} className="row-auto">
                              <md-elevated-button
                                type="button"
                                onClick={()=>handleClick(genre.id)}>
                                {genre.name}
                              </md-elevated-button>
                              <br/>
                          </div> })}
                    </div>
                </div>
    </> 
    )
  
  }
