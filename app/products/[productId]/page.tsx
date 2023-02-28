import { fetchingAllProductsAndFindOne } from "@/services"
import {notFound} from 'next/navigation'
import { Slider } from "@/components"
import ButtonCart from "./ButtonCart"

export interface productIdParams {
  params: {
    productId: number
  }
}

const page = async ({params}: productIdParams):Promise<JSX.Element> => {
  const product = await fetchingAllProductsAndFindOne(params.productId)
  console.log(product);
  
  if(product.message ==='not found') {
    notFound()
  }
  return (
    <main className='mt-20 mb-6 border-[1px] border-gray-600 border-solid rounded-lg p-4 text-slate-100 select-none'>
      <section className='flex flex-col gap-2'>
        <p>{product.product.description}</p>
        <h1 className="text-center text-3xl font-bold">{product.product.title}</h1>
      </section>
      <section>
        <Slider images={product.product.images}/>
      </section>
      <section className="flex flex-col gap-2">
        <div className="flex">
          <p className='text-cyan-600'>{product.product.price}$</p>
          <span className='text-gray-600'> - {product.product.category.name}</span>
        </div>
        <span className='text-gray-200'>Published at: {product.product.creationAt.substring(0, 10)}</span>
        <ButtonCart id={product.product.id} />        
      </section>
    </main>
  )
}

export default page