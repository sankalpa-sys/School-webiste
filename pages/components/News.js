import React from 'react'
import SingleNews from './SingleNews'

function News() {
  return (
    <main className='flex flex-col w-full justify-center items-center space-y-10 mt-20'>
      <h1 className='text-2xl text-indigo-600 font-bold font-Lora'>News & Announcements </h1> 
      <section className='grid grid-cols-1  md:grid-cols-3 gap-x-10'>
          <SingleNews/>
          <SingleNews/>
          <SingleNews/>
      </section>
    </main>
  )
}

export default News