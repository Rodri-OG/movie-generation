//Components
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

//Styles
import { Noto_Sans } from 'next/font/google';
import "./globals.css";

const noto = Noto_Sans({
  styles: ["normal", "italic"],
  weight: ["400" , "500" , "700"],
  subsets: ['latin']});



  export const metadata = {
    title: 'To see',
    description: 'recomendacion de peliculas y series',
  };

  export default function RootLayout({ children }) {
    return (
      <html lang="es">
       <head>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"/>
        </head>
      <body className={noto.className}>
        
        <div className="grid grid-cols-[0.01fr_1fr] grid-rows-[0.1fr_1fr]  w-screen h-screen gap-2 my-1" >
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
              <Header />
            </div>
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <Sidebar />
            </div>
            
            <main className="col-start-2 col-end-3 h-full w-full p-4 bg-surface shadow-md rounded-xl ">
              <div>{children}</div>
            </main>
        </div>
      </body>      
      </html>
    )
  }
