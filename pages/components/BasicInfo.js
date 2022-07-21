import React from 'react'
import Slide from 'react-reveal/Slide';

function BasicInfo() {
  return (

    <Slide left>
          <main className=' md:w-[80vw]  mx-auto h-auto flex flex-wrap my-8 shadow-lg px-4 rounded-lg'>
        <div className='w-full flex md:flex-row flex-col md:space-x-10 space-y-8 md:space-y-0 my-6'>
        <section className='bg-blue-600  h-64 w-full md:w-[50%] flex space-y-4  flex-col justify-center rounded-xl items-center font-Roboto text-white '>
            <h1 className='text-7xl font-bold'>984</h1>
            <p className='text-xl font-bold drop-shadow-lg'>STUDENTS</p>
        </section>
        <section className='bg-green-500  h-64 w-full md:w-[50%] space-y-4  flex  flex-col justify-center rounded-xl items-center font-Roboto text-white '>
            <h1 className='text-7xl font-bold'>54</h1>
            <p className='text-xl font-bold'>TEACHING STAFF</p>
        </section>
        </div>
        <div className='w-full flex md:flex-row flex-col md:space-x-10 space-y-8 md:space-y-0 my-6 items-center'>
        <section className='bg-orange-600 space-y-4   h-64 w-full md:w-[50%] flex  flex-col justify-center rounded-xl items-center font-Roboto text-white '>
            <h1 className='text-7xl font-bold'>26</h1>
            <p className='text-xl font-bold'>NON TEACHING STAFF</p>
        </section>
        <section className='bg-blue-600 space-y-4   h-64 w-full md:w-[50%] flex  flex-col justify-center rounded-xl items-center font-Roboto text-white '>
            <h1 className='text-7xl font-bold'>45</h1>
            <p className='text-xl font-bold'>YEARS ESTABLISHED</p>
        </section>
        </div>
        
        
    </main>
        </Slide>
    
  )
}

export default BasicInfo