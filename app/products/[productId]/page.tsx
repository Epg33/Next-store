import { fetchingAllProductsAndFindOne } from "@/services"

export interface productIdParams {
  params: {
    productId: number
  }
}

const page = async ({params}: productIdParams):Promise<JSX.Element> => {
  const product = await fetchingAllProductsAndFindOne(params.productId)
  console.log(product);
  
  return (
    <div className="mt-32 text-9xl text-slate-100">xd</div>
  )
}

export default page