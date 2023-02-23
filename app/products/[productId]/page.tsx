import { fetchingAllProductsAndFindOne } from "@/services"
import {notFound} from 'next/navigation'
import { Slider } from "@/components"

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
    <main className='mt-16'>
      <h1>{product.product.title}</h1>
      <section>
        <Slider images={product.product.images}/>
      </section>
      <section>
        <div><h2>{product.product.price}$</h2> <span>{product.product.category.name}</span></div>
        <p>{product.product.description}</p>
        <span>Published at: {product.product.creationAt}</span>
      </section>
    </main>
  )
}

export default page