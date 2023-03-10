import Image from "next/dist/client/image";
import { fetchByCategory, fc } from "../services/fetching";

export default async function Home() {
  const womansClothes = await fetchByCategory(1);
  const categories = await fc();
  return (
    <main className="text-slate-100 pt-16 flex flex-col gap-8 lg:w-full lg:overflow-x-hidden">
      <section className="w-full flex flex-col gap-5 items-center">
        <h3 className="text-xl place-self-start pl-8">Latest in clothes</h3>
        <div className="w-full flex flex-col gap-5 items-center px-4 lg:flex-row lg:h-full lg:w-screen lg:items-center">
          { 
            womansClothes.map((piece, i)=>{ 
              return <div key={i} className='w-11/12 h-5/6 flex flex-col gap-1 items-start p-3 bg-slate-800 rounded-xl lg:w-[15.2%] lg:h-full'>
                <Image 
                  src={piece.images[0]} alt={piece.description} width={300} height={450} 
                  className="w-full h-auto lg:h-[256px]"/> 
                <h4 className="text-sm lg:w-3/4 lg:text-ellipsis lg:overflow-hidden lg:whitespace-nowrap">{piece.title}</h4>
                <p className="text-cyan-500">{piece.price} $</p>
              </div>
            })
          }
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h3 className="pl-6 text-xl">
          Categories
        </h3>
        <div className="w-full flex flex-col gap-4 px-6">
          {
            categories.map((cat, i)=> {
              return <div key={i} >
                <Image
                 src={cat.image} alt={`image for the ${cat.name} category`} width={640} height={480}
                 className="rounded-xl w-full"
                />
                <h4 className="relative bottom-8 z-10 h-11/12 w-full pl-4 pb-2 bg-gradient-to-b from-transparent to-slate-800 font-semibold rounded-b-xl">{cat.name.toUpperCase()}</h4>
              </div>
            })
          }
        </div>
      </section>
    </main>
  );
}
 