'use client'
import { useState } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const FavButton = () => {
  const [selected, setSelected] = useState<boolean>(false)
  return (
    <button onClick={()=>setSelected(!selected)}>
      {
        selected ? <MdFavorite className='text-red-600'/> : <MdFavoriteBorder />
      }
    </button>
  )
}

export default FavButton