'use client'

import MoviesList from '@/components/MoviesList';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import MovieRecommendation from '@/components/MovieRecommendation';

export default function Home() {
  return (
  <>
  <div className="grid h-screen w-full gap-4 m-4 p-4  grid-cols-1 grid-rows-2  md:grid-cols-[1fr_0.3fr] md:grid-rows-1 ">
    
    <div className="col-start-1 col-end-2 h-full w-full grid grid-cols-1 grid-rows-[0.01fr_1fr] p-3 gap-4 bg-surfaceVariant shadow-md rounded-xl overflow-y-scroll ">
      
      <div  className="row-start-1 row-end-2 h-full w-full">
        <h1 className="text-center font-semibold">Tendencias</h1>
      </div>
      
      <div className="row-start-2 row-end-3 grid grid-cols-1 h-full w-full overflow-y-scroll justify-items-center gap-4 lg:grid-cols-2  ">
        <Suspense fallback={<Loading/>}> <MoviesList/></Suspense>
      </div>

    </div>
      
    <div className="row-start-2 row-end-3  h-full w-full place-content-center overflow-y-scroll p-4  rounded-xl  bg-surfaceVariant md:col-start-2 md:col-end-3 md:row-span-1 "> 
      <Suspense fallback={<Loading/>}> <MovieRecommendation/></Suspense>
    </div>
      
  </div>
  </>
  )
}

