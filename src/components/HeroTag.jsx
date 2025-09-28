import React from 'react'
import Image from 'next/image'

export const HeroTag = () => {
  return (
    <div className='h-15 border-1 border-gray-500 rounded-4xl items-center px-8 py-4'>
        <div className='flex flex-row items-center justify-evenly'>
            <Image src="/heroTagIcon.svg" width={28} height={28} alt="Featured Tag Icon"/>
            <p className='text-black text-base font-light ml-6'>Your flexible workspace to recall</p>
        </div>
    </div>
  )
}
