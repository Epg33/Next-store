import Image from "next/image"

interface product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
}

const fetchProducts = async ():Promise<product[]> => {
  const data = await fetch("https://fakestoreapi.com/products")
  const res = await data.json();
  return res
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="w-full h-fit flex flex-col items-start bg-slate-900">
      <h1 className="text-6xl text-slate-100">NEXT STORE</h1>
      <div className="w-full grid grid-cols-3 gap-2">
        {
          products.map(product=> {
            return <div key={product.id} className="w-3/4 h-fit bg-slate-800">
              <h4>{product.title}</h4>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <span>{product.category}</span>
              <Image src={product.image} alt={`image for the ${product.title}`} width={680} height={770} className="w-full h-auto"/>
              <p>{product.rating.rate}</p>
            </div>
          })
        }
      </div>
    </main>
  );
}
