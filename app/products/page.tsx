import { fetchingAllProducts } from "@/services"
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const page = async ():Promise<JSX.Element> => {
  const data = await fetchingAllProducts();
  return (
    <>
    <main className='mt-16'> 
      <h1 className='text-3xl text-slate-100 pl-4'>Amazing Products</h1>
      <section>
        <button>Reset</button>
        <label htmlFor="price">Price</label>
        <input type="number" placeholder="Max price" name="price"/>
      </section>
      <section className='flex flex-col gap-4 items-center'>
        {
          data.map((product, i)=> {
            return <Link key={i} href='/'>
              <Image src={product.image} alt={`image of ${product.title}`} width={300} height={450}/>
              <h4>{product.title}</h4>
              <p>{product.price}</p>
            </Link>
          })
        }
      </section>
    </main>
    </>
  )
}

export default page