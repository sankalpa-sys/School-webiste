
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomFooter from './components/BottomFooter'
import Profile from './components/Profile'
import Head from 'next/head'
import useSWR from 'swr'






const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Staff() {
  
    
  const { data, error } = useSWR('/api/staffinfo', fetcher);
  
  if (error) return <div className="h-screen w-screen flex justify-center items-center"><h1 className="text-red-600 font-bold text-2xl animate-bounce">Failed to Load</h1></div>
  if (!data) return <div className="h-screen w-screen flex justify-center items-center"><h1 className="text-blue-700 font-bold text-2xl animate-bounce">Loading...</h1></div>
    
  return (
    <main className=''>
      <Head>
        <title>Staff Information</title>
        <meta name="description" content="Kyamin Secondary School Staffs" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          crossOrigin="anonymous"
        />

      </Head>
        <Header/>
        <Navbar/>

        <div
        className="md:h-[500px] h-[500px] bg-fixed   bg-bottom bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/8866775/pexels-photo-8866775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="md:text-gray-100   text-black drop-shadow-2xl  text-center  font-bold font-mono text-4xl md:text-5xl">Our Staff</h1>
        
      </div> 
        
        <div className='grid bg-gradient-to-r from-gray-100 to-slate-100 w-full grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 py-24 md:px-10 px-4 px-auto place-items-center'>
             {data.map(staff => <Profile key={staff.id} name={staff.name} post ={staff.post} pic={staff.pic} />)}
        </div>
        <Footer/>
        <BottomFooter/>
    </main>
  )
}



export default Staff