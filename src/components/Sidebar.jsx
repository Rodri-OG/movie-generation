'use client'
//Components
import Link from 'next/link'
import { useState } from 'react';



//Styles
import '@material/web/divider/divider.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';



export default function Sidebar () {

  const [ open, setOpen ] = useState(false);

  function handleOpenSidebar (){
    if (!open) { 
      setOpen(true)
    } else {
      setOpen(false)
    }
  };
  
  return (
    <>
      {open 
        ? <button onClick={handleOpenSidebar} className="ml-4 p-2 hover:bg-onPrimary outline-none rounded-3xl"><span className="material-icons">menu_open</span></button> 
        : <button onClick={handleOpenSidebar} className="ml-2 p-2 hover:bg-onPrimary outline-none rounded-3xl"><span className="material-icons">menu</span></button> 
      }
        {!open

          ? <div className={`h-full bg-surfaceVariant text-onPrimaryContainer backdrop-blur-lg transition-all duration-700  ${ open ? "translate-x-2" : "translate-x-0"}`}>
              <nav className="flex flex-col gap-1 p-1">
                <ul>
                  <Link href={'/'}>
                    <li role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                        <span className="material-icons flex items-center mr-4">home</span>
                    </li>
                  </Link>
                  <Link href={'/trending'}>
                    <li role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                        <span className="material-icons flex items-center mr-4">trending_up</span>
                    </li>
                  </Link>
                  <Link href={'/movietoday'}>
                    <li role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                        <span className="material-icons flex items-center mr-4">auto_awesome</span>
                    </li>
                  </Link>
                    
                </ul>
              </nav>
            </div>
         

        : <div className={`h-full bg-surfaceVariant text-onPrimaryContainer backdrop-blur-lg transition-all duration-300 ease-in-out  ${open? "visible" : "hidden"}`}>
            <nav className="flex flex-col gap-1 p-1">
              <ul>
                <Link href={'/'}>
                  <li role="button" onClick={handleOpenSidebar} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                      <span className="material-icons flex items-center mr-4">home</span>
                    Inicio
                  </li>
                </Link>
                <Link href={'/trending'}>
                  <li role="button" onClick={handleOpenSidebar} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                      <span className="material-icons flex items-center mr-4">trending_up</span>
                    Tendencias
                  </li>
                </Link>
                <Link href={'/movietowatch'}>
                  <li role="button" onClick={handleOpenSidebar} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all  hover:bg-onPrimary focus:bg-onPrimary  active:bg-onPrimary hover:text-onPrimaryContainer focus:text-onPrimaryContainer active:text-onPrimaryContainer outline-none">
                      <span className="material-icons flex items-center mr-4">auto_awesome</span>
                    Que vemos
                  </li>
                </Link>
                  
              </ul>
            </nav>
          </div>
      }
      
    </>

  )
}