import React from 'react'
import Image from 'next/image'

const HeadTag =(props)=> (
    <div className='flex flex-row items-center border-1 border-gray-500 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl px-6 py-4'>
        <Image src={props.tagIcon} width={32} height={32} alt="question mark icon"/>
        <p className='text-lg text-black font-light ml-5'> {props?.tagTitle} </p>
    </div>
)

const ProblemCard = (props) => {
  return (
    <div className='flex flex-col items-start'>
        <HeadTag tagIcon={props.tagIcon} tagTitle={props.tagTitle}/>
        <Image src={props.cardImg} width={480} height={200} alt={props?.altText} className="h-[300px] filter grayscale mt-1"/>
        <p className='text-base text-black font-light text-center mt-8'> {props?.cardText} </p> 
    </div>
  )
}

export default ProblemCard