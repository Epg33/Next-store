import Image from "next/dist/client/image";
import { fetchByCategory, fetchingHome } from "../services/fetching";

export default async function Home() {
  const womansClothes = await fetchByCategory("women's clothing");
  console.log(womansClothes);
  return (
    <main className="text-slate-100 pt-16">
      <section className="w-full flex flex-col gap-5 items-center px-4">
        <h4 className="text-xl">Latest in women's clothes</h4>
        {
          womansClothes.map((piece, i)=>{
            return <div key={i} className='w-11/12 h-5/6 flex flex-col gap-1 items-start p-3 bg-slate-800 rounded-xl'>
              <Image 
                src={piece.image} alt={piece.description} width={300} height={450} 
                className="w-full h-auto"/>
              <h3 className="text-sm">{piece.title}</h3>
              <p className="text-cyan-500">{piece.price} $</p>
            </div>
          })
        }
      </section>
    </main>
  );
}
