import { fetchingAllProducts } from "@/services"
import { RxReset } from 'react-icons/rx'
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

const page = async ():Promise<JSX.Element> => {
  const data = await fetchingAllProducts();
  console.log(data)  
  return ( 
    <>
    <main className='w-full mt-16 flex flex-col gap-8'> 
      <h1 className='text-3xl text-slate-100 pl-4'>Amazing Products</h1>
      <div className='w-full flex flex-col gap-12'>
        <section className="w-full flex flex-col items-start px-8 gap-6 text-slate-100 text-lg font-medium">
          <h2 className="text-2xl">Filters</h2>
          <button className="w-full flex justify-between items-center">Reset <RxReset /></button>
          <label htmlFor="price" className='w-full flex justify-between gap-4' >Price
            <input type="number" placeholder="Maximun price" className='w-5/6 pl-2 placeholder:text-slate-300 text-slate-900' name="price"/>
          </label>
          <label htmlFor="title" className='w-full flex justify-between gap-4' >Title
            <input type="text" name="title" className='w-5/6 pl-2 placeholder:text-slate-300 text-slate-900' placeholder="Title" />
          </label>
          <label htmlFor="categories" className='w-full flex justify-between gap-4'>Category
            <select name="categories" className="text-slate-100 w-5/6 pl-2 text-slate-900" id="">
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
              <option value="">e</option>
              <option value="">f</option>
            </select>
          </label>
        </section>
        <section className='flex flex-col gap-4 items-center'>
          {
            data.map((product, i)=> {
              return <Link key={i} href='/'>
                <Image src={product.images[0]} alt={`image of ${product.title}`} width={300} height={450}/>
                <h4>{product.title}</h4>
                <p>{product.price} $</p>
              </Link>
            })
          }
        </section>
      </div>
    </main>
    </>
  )
}

export default page