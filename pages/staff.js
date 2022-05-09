import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import BottomFooter from './components/BottomFooter'
import Profile from './components/Profile'
import Head from 'next/head'

function Staff({data}) {
    
    
    
  return (
    <main className='bg-gradient-to-r from-pink-200 to-orange-200'>
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
        <div className='grid w-full grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-32 py-24 md:px-10 px-4 px-auto place-items-center'>
             {data.map(staff => <Profile key={staff.id} name={staff.name} post ={staff.post} pic={staff.pic} />)}
        </div>
        <Footer/>
        <BottomFooter/>
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/staffinfo')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default Staff