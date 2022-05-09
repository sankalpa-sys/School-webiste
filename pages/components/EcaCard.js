import React from 'react'

function EcaCard({title, desc, pic}) {
  return (
    <main className='md:w-[80%] w-full mx-auto h-auto   font-Roboto  rounded-lg shadow-lg'>
        <div className='w-full h-72 '>
                <img src={pic} className='w-full h-full rounded-t-lg' alt="" />
        </div>

        <div className=' flex rounded-b-lg flex-col justify-start   py-8 items-start px-6 h-auto  bg-gray-200 w-[100%] space-y-2 mx-auto  '>
            <h1 className='font-mono font-semibold text-xl '>{title}</h1>
            <p className='text-gray-500 text-sm md:text-base'>{desc} </p>
        </div>
    </main>
  )
}

export default EcaCard