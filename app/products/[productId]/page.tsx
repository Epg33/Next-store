import { fetchingAllProductsAndFindOne } from "@/services"
import {notFound} from 'next/navigation'
import Image from "next/image"

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
    <main>
      <h1>{product.product.title}</h1>
      <section>
        {
          product.product.images.map((img, i)=> {
            return <div key={i}>
              <Image src={img} alt={`image of ${product.product.title}`} width={640} height={480}/>
            </div>
          })
        }
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