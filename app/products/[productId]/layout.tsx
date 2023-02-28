
export default function layout ({children}:{children: React.ReactNode}): JSX.Element  {
  return (
    <main className="w-11/12 place-self-center">
      {children}
    </main>
  )
}