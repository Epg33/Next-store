export interface products {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
      id: number,
      name: string,
      image: string
    },
    images: string[]
}

export interface category {
  id: number,
  name: string,
  image: string
}

export const fetchingAllProductsAndFindOne = async (id:number): Promise<products> | undefined => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=200");
  const data: Promise<products[]> = res.json();
  const product =(await data).find((p)=> p.id == id)
  return product
}

export const fetchingSomeProducts = async ():Promise<products[]> => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
  const data: Promise<products[]> = res.json();
  return data
}

export const fetchinSingleProduct = async (id:number):Promise<products> => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/5`);
  const data: Promise<products> = res.json()
  return data;
}

export const fetchByCategory = async (category: number ):Promise<products[]> => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${category}/products?offset=0&limit=6`);
  const data: Promise<products[]> = res.json();
  return data
}

export const fc = async ():Promise<category[]> => {
  const res = await fetch('https://api.escuelajs.co/api/v1/categories');
  const data = res.json();
  return data
}