import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-reveal'

function EcaCard({title, desc, pic}) {
  return (
    <Fade bottom>
      <main className='md:w-[80%] w-full mx-auto h-auto   font-Roboto  rounded-lg shadow-lg'>
        <div className='w-full h-72 relative '>
                <Image src={pic} layout="fill" className='w-full h-full rounded-t-lg' alt="" />
        </div>

        <div className=' flex rounded-b-lg flex-col justify-start   py-8 items-start px-6 h-auto  bg-gray-200 w-[100%] space-y-2 mx-auto  '>
            <h1 className='font-mono font-semibold text-xl '>{title}</h1>
            <p className='text-gray-600 text-sm md:text-base'>{desc} </p>
        </div>
    </main>
    </Fade>
  )
}

export default EcaCard