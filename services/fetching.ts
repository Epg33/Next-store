export interface products {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating : {
    rate: number,
    count: number
  }
}

export const fetchingHome = async ():Promise<products[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Promise<products[]> = res.json();
  return data
}

export const fetchByCategory = async (category: string ):Promise<products[]> => {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data: Promise<products[]> = res.json();
  return data
}

export const fetchCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/products/categories");
  const data = res.json();
  return data
}