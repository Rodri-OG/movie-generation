'use client'

import Search from "@/components/Search";


export default function Header () {

  return (
    <>
    <div className="grid grid-cols-[0.3fr_1fr] p-1 place-content-center sticky inset-x-0 top-0 z-30 w-full">
      <div className=" p-3 m-1 h-full flex flex-row place-items-center justify-center  bg-surfaceVariant">
        <h1 className="font-bold">¿Que vemos hoy?</h1>
      </div>
      <div className="col-start-2 col-span-2 p-3 ">
        <Search/>
      </div>
    </div>
    </>
  )
};