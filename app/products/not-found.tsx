

const NotFound = () => {
  return (
    <section className='h-screen w-full grid place-content-center'>
      <div className='flex flex-col items-center gap-12 text-slate-100'>
        <h1 className='relative w-full text-center text-9xl tracking-widest box-reflect'>404</h1>
        <p>Page not found...</p>
      </div>
    </section>
  )
}

export default NotFound