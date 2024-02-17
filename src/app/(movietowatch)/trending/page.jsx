'use client'

import MoviesList from '@/components/MoviesList';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

export default function Trending() {
  return (
  <>
    <div className="h-screen w-screen grid grid-cols-1 grid-rows-[0.01fr_1fr] p-4 gap-4 m-4 bg-surface rounded-xl  justify-items-center">
      
      <div className="row-start-1 row-end-2 font-bold"><h1>Tendencias</h1></div>
      
      <div className="row-start-2 row-end-3 h-full w-full overflow-y-scroll grid grid-cols-2 justify-items-center gap-4">
        <Suspense fallback={<Loading/>}>
          <MoviesList/>
        </Suspense>
      </div>
    </div>
  </>
  )
}