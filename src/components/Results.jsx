import Card from "@/components/Card";

export default function Results({ results }) {
  return (
    <div className="grid grid-cols-2 grid-rows-1 justify-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2  gap-4 m-1">
      {results.map((result) => (
        <Card key={result.id} params={result} />
      ))}
    </div>
  );
}