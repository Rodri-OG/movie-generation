'use client'
import { useRouter } from 'next/navigation';
import '@material/web/button/elevated-button.js';


export default  function  Card ({ params }) {
  const router = useRouter();

  return(
    <>
      <div key={params.id} className="grid grid-rows-[1fr_0.3fr_0.1fr]  bg-primaryContainer shadow-md rounded-xl w-full h-full gap-1">
            <div className="row-start-1 row-end-2 rounded-xl w-full max-h-72">
              <img className="object-cover max-h-72 w-full rounded-xl" src={ `https://image.tmdb.org/t/p/w500/${params.poster_path}`} alt={params.id} />
            </div>
            <div className="p-1 row-start-2 row-end-3" >
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">{params.original_title}</p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal  opacity-75">{params.overview.substring(0, 80)}</p>
            </div>
            <div className="p-1 row-start-3 row-end-4">
                <md-elevated-button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button"
                  onClick={() => router.push(`/${params.id}`)}>
                  Detalles
                </md-elevated-button>
            </div>
      </div>
    </>
  )
}
