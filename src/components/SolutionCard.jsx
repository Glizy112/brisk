import React from 'react'
import Image from 'next/image'

const SolutionCard = (props) => {
  return (
    <div className='bg-[#111111] rounded-4xl p-8'>
        <div className='flex flex-row items-center gap-14'>
            <Image src={props.cardImg} width={640} height={580} alt={props.altText} className='h-[480px]'/>
            <div className='flex flex-col items-start gap-8'>
                <div className='flex flex-col items-start'>
                    <h4 className='text-3xl text-white font-bold'> {props.cardTitle} </h4>
                    <p className='text-base text-gray-300 font-light'> {props?.caption} </p>
                </div>
                <div className='flex flex-col items-start'>
                    <p className='text-lg text-white font-normal mt-8'> 
                        {props.firstPt}
                    </p>
                    <p className='text-lg text-white font-normal mt-8'> 
                        {props.secondPt}
                    </p>
                    <p className='text-lg text-white font-normal mt-8'> 
                        {props.thirdPt}
                    </p>
                </div>
                <div className='w-full flex flex-row items-center justify-between'>
                    <h4 className='text-3xl text-white font-bold'> {props.cardSlang} </h4>
                    <Image src={props.cardIcon} width={64} height={64} alt={props.altIconText}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SolutionCard