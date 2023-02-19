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

export const fetchingAllProducts = async ():Promise<products[]> => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20");
  const data: Promise<products[]> = res.json();
  return data
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