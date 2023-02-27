'use client'

const ButtonCart = ({id}:{id:number}) => {
  return (
    <button onClick={()=>console.log(id)} className='w-11/12 place-self-center bg-cyan-600 text-center text-xl rounded-xl'>Add to Cart</button>
  )
}

export default ButtonCart