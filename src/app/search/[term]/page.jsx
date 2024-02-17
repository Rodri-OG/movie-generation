import Results from "@/components/Results";

export default async function SearchPage({ params }) {

  
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5d2829cc2ab057137f0b1a652822ddc1&query=${params.term}&language=es-AR&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
 
    
  return (
    <div >
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No se encontraron resultados</h1>
      )}

      {results && <Results results={results} />}
    </div>
  );
}