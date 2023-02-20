import { fetchingSomeProducts } from "@/services"
import { RxReset } from 'react-icons/rx'
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import FavButton from "./FavButton";

const page = async ():Promise<JSX.Element> => {
  const data = await fetchingSomeProducts();
  
  return ( 
    <>
    <main className='w-full mt-16 flex flex-col sm:items-center gap-8 lg:mt-20'> 
      <h1 className='text-3xl text-slate-100 pl-4 sm:w-11/12 sm:text-left lg:w-full'>Amazing Products</h1>
      <div className='w-full flex flex-col gap-12 sm:w-11/12 md:flex-row lg:w-full'>
        <section className="w-full flex flex-col items-start px-8 gap-6 text-slate-100 text-lg font-medium md:w-1/4 md:fixed lg:w-1/5">
          <h2 className="text-2xl">Filters</h2>
          <button className="w-full flex justify-between items-center px-2 text-xl text-slate-900 bg-slate-50 rounded-xl">Reset <RxReset /></button>
          <label htmlFor="price" className='w-full flex justify-between gap-4 md:flex-col' >Price:
            <input type="number" placeholder="Maximun price" className='w-5/6 pl-2 outline-none rounded-lg placeholder:text-slate-300 text-slate-900 md:w-full md:text-sm md:h-7' name="price"/>
          </label>
          <label htmlFor="title" className='w-full flex justify-between gap-4 md:flex-col' >Title:
            <input type="text" name="title" className='w-5/6 pl-2 outline-none rounded-lg placeholder:text-slate-300 text-slate-900 md:w-full md:text-sm md:h-7' placeholder="Title" />
          </label>
          <label htmlFor="categories" className='w-full flex justify-between gap-4 md:flex-col'>Category:
            <select name="categories" className="w-5/6 pl-2 text-slate-900 outline-none md:w-full md:text-sm md:h-7" id="">
              <option value="">All</option>
              <option value="Clothes">Clothes</option>
              <option value="Electronics">Electronics</option>
              <option value="Shoes">Shoes</option>
              <option value="Others">Others</option>
            </select>
          </label>
        </section>
        <section className='w-full flex flex-col gap-4 items-center md:w-3/4 md:grid md:grid-cols-2 md:ml-[28%] lg:grid-cols-3 lg:ml-[22%]'>
          {
            data.map((product, i)=> {
              return <div key={i} className='w-10/12 flex flex-col items-center gap-4 text-slate-100'>
                <Link href={`/products/${product.id}`} className="w-full flex flex-col items-center gap-4">
                  <Image 
                    src={product.images[0]} alt={`image of ${product.title}`} width={300} height={450}
                    className='w-full h-auto'/>
                  <h4 className="place-self-start">{product.title}</h4>
                </Link>
                <div className='w-full flex justify-between'>
                  <Link href={`/products/${product.id}`} className="place-self-start"><span className='text-gray-500'>{product.category.name}</span> - {product.price} $</Link>
                  <FavButton />
                </div>
              </div>
            })
          }
        </section>
      </div>
    </main>
    </>
  )
}

export default page