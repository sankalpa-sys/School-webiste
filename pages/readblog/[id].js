import axios from 'axios'
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import BottomFooter from '../components/BottomFooter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ReserveSeat from '../components/ReserveSeat';
import moment from 'moment'


function ReadBlog() {
    
  const router = useRouter()
  const [blog, setBlog] = useState({})
  const id = router.query.id;

useEffect(() => {
    const getBlog =  async() => {
        const res = await axios.get(`http://localhost:3000/api/singleblog/${id}`)
        setBlog(res.data);
    }

    getBlog()
}, [id])


console.log(blog);



  
  return (
    <main>
      <Header/>
      <Navbar/>

      <section className='w-[90%] mx-auto my-4 '>
        <Image src={blog.thumbnail?blog.thumbnail:"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} layout="responsive" height={45} width={100}/>
        <div className='flex text-sm text-gray-600 my-3 space-x-2'>
          <p className='mt-1'>By</p>
          <p className='font-bold font-Cursive text-lg text-blue-700 '>{blog.author} </p>
          <p className='mt-1'>({blog.post}, class {blog.grade?blog.grade:""}),</p>
          <p className='text-xs mt-2 '>{moment(blog.createdAt).format('LL')}</p>

          
        </div>
        <h1 className='font-bold text-4xl text-yellow-600 font-mono mt-10 mb-4 '>
            {blog.title}
          </h1>

          <p className=' md:w-[80%] text-gray-600 first-letter:font-bold first-letter:uppercase first-letter:text-red-600 first-letter:text-lg  font-Roboto'>{blog.content}</p>
      </section>
        

        <ReserveSeat/>
        <Footer/>
        <BottomFooter/>
    </main>
  )
}

export default ReadBlog