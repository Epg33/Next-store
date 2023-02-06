export const fetchingHome = async () => {
  const res = await fetch();
  const data = res.json();
  return data
}