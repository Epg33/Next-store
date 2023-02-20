import { fetchingAllProductsAndFindOne } from "@/services"
import dayjs from "dayjs"
import Image from "next/image"

export interface productIdParams {
  params: {
    productId: number
  }
}

const page = async ({params}: productIdParams):Promise<JSX.Element> => {
  const product = await fetchingAllProductsAndFindOne(params.productId)
  console.log(product);
  console.log(dayjs(product.creationAt, 'YYYY MMMM DD'));
  
  
  return (
    <main>
      <h1>{product.title}</h1>
      <section>
        {
          product.images.map((img, i)=> {
            return <div key={i}>
              <Image src={img} alt={`image of ${product.title}`} width={640} height={480}/>
            </div>
          })
        }
      </section>
      <section>
        <div><h2>{product.price}$</h2> <span>{product.category.name}</span></div>
        <p>{product.description}</p>
        <span>Published at: {product.creationAt}</span>
      </section>
    </main>
  )
}

export default page