'use client'
import { useRouter } from 'next/navigation';


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
                <button
                  className="btn-elevated relative flex flex-row items-center justify-center gap-x-2 py-2.5 px-6 rounded-[6.25rem] shadow-lg text-sm tracking-[.00714em] font-medium bg-primary hover:bg-primaryContainer focus:bg-onPrimaryContainer text-onPrimary"
                  onClick={() => router.push(`/${params.id}`)}>
                  Detalles
                </button>
            </div>
      </div>
    </>
  )
}
