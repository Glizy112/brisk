import React from 'react'
import Link from 'next/link'

const HeroCTA = () => {
  return (
    <div className='w-[430px] flex flex-col items-start gap-4 mt-8'>
        <div className='flex flex-row'>
            <p className='leading-16'> 
                <span className='text-5xl text-black font-bold'> Keep your work sorted. </span>
                <span className='text-5xl text-[#949494] font-bold'> like a clear mind. </span>
            </p>
        </div>
        <div className='h-12 w-0.5 bg-[#111111] mx-40'/>
        <button className='bg-[#111111] rounded-full items-center px-28 py-6'>
            <p className='text-white text-xl'><Link href="#waitlist">Get Started</Link></p>
        </button>
    </div>
  )
}

export default HeroCTA