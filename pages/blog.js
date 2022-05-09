import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import { useRouter } from "next/router";
import SingleBlog from "./components/SingleBlog";
import ReserveSeat from "./components/ReserveSeat";
import Head from "next/head";
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

function Blog() {
  const router = useRouter()
  const { data, error } = useSWR("/api/blog", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <main className="">
      <Head>
        <title>School Blogs</title>
        <meta
          name="description"
          content="These are the blogs of our school written by our students and teachers. You can read our blogs and also reserve a seat in our school."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          crossOrigin="anonymous"
        />
       
      </Head>
      <Header />
      <Navbar />
      <div
        className="md:h-[500px] h-[500px] bg-fixed  bg-bottom  bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-gray-900  font-bold font-Lora text-7xl">BLOGS</h1>
        <button onClick={()=>router.push("/addblog")} className="bg-blue-800 px-5 py-4 shadow-xl rounded-md hover:bg-blue-900 transition-all duration-300 ">Add a Blog</button>
      </div> 

      <section className="px-8 py-8 grid md:grid-cols-3 grid-cols-1 md:gap-x-8 gap-y-32 md:gap-y-20">
       {data.map((blog)=>(
          <SingleBlog key={blog._id} id={blog._id} title={blog.title} content= {blog.content} thumbnail={blog.thumbnail} author={blog.author}  createdAt={blog.createdAt} />
       ))}

      </section>
      <ReserveSeat/>
      <Footer />
      <BottomFooter />
    </main>
  );
}



export default Blog;
