'use client'

import '@material/web/progress/linear-progress.js';


export default function Loading () {
  return(
    <>
      <md-linear-progress value="0.5" buffer="0.8"></md-linear-progress>
      <h1 className="font-extrabold">Loading...</h1>
    </>
  )
}