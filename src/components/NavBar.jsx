import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar(props) {
  return (
    <div className='w-[100vw] flex flex-row px-20 pt-12 items-center justify-between'>
        <Image src="/logo.svg" width={175} height={92} alt="logo"/>
        <nav>
            <ul className='flex flex-row items-center'>
                <Link 
                  href="/" 
                  className='ml-20 font-medium transition delay-150 duration-200 ease-in-out hover:opacity-50'
                >Home</Link>
                <Link 
                  href="#problem" 
                  className='ml-20 font-medium transition delay-150 duration-200 ease-in-out hover:opacity-50'
                >Why Brisk?</Link>
                <Link 
                  href="#solution" 
                  className='ml-20 font-medium transition delay-150 duration-200 ease-in-out hover:opacity-50'
                >The Solution</Link>
            </ul>
        </nav>
        <button className='h-14 bg-[#111111] rounded-4xl items-center px-6 py-4'>
            <p className='text-white text-sm'><Link href="#waitlist">Get Early Access</Link></p>
        </button>
    </div>
  )
}

export default Navbar