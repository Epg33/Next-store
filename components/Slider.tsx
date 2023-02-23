'use client'
import { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import Image from 'next/image'

const Slider = ({images}:{images:string[]}) => {
  const [index, setIndex] = useState<number>(0);
  const restIndex = () => {
    const newIndex = index === 0 ? images.length - 1 : index - 1
    console.log(newIndex);
    
    setIndex(newIndex)
  }

  const sumIndex = () => {
    const newIndex = index === images.length - 1 ? 0 : index + 1
    console.log(newIndex);
    
    setIndex(newIndex)
  }
  return (
    <div className='max-w-[1400px] h-[480px] w-full m-auto py-16 relative group'>
      <Image src={images[index]} height={480} width={640} alt='Picture of a product' className='w-full h-full rounded-lg'/>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={restIndex} size={30}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={sumIndex} size={30}/>
      </div>
    </div>
  )
}

export default Slider