import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import { useRouter } from "next/router";
import SingleBlog from "./components/SingleBlog";
import ReserveSeat from "./components/ReserveSeat";
import Head from "next/head";
import axios from "axios";
import { RefreshIcon, XIcon } from "@heroicons/react/outline";
import  toast, { Toaster } from "react-hot-toast";
import { useSession,signIn } from "next-auth/react";
import { SpinnerCircularFixed } from 'spinners-react';




function Blog() {
  const { data: session } = useSession();
  const router = useRouter();
  
  const [blogs, setBlogs] = useState([]);

  const [idToBeUpdated, setIdToBeUpdated] = useState("")
  const [loading, setloading] = useState(false)

  const [author, setAuthor] = useState("")
  const [post, setPost] = useState("")
  const [grade, setGrade] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [runUseEffect, setrunUseEffect] = useState(1);




  const getId = (id,author,post,grade,title,content) => {
    setIdToBeUpdated(id);
    setAuthor(author);
    setPost(post);
    setGrade(grade);
    setTitle(title);
    setContent(content);
  }
  useEffect(() => {
    const getBlogs = async () => {
      setloading(true)
      const res = await axios.get("/api/blog");
      setBlogs(res.data);
      setloading(false)
      
     
    };
    getBlogs();
  }, [runUseEffect]);

  const handleAddABlogClick = () => {
    if(session){
      router.push("/addblog");
    }else{

      signIn()
    }
  }

  const [display, setdisplay] = useState("hidden")

  const handleEditButtonClick = async () => {
    
    const loadingToast = toast.loading("Updating");
    try {
      
      await axios.put(`/api/singleblog/${idToBeUpdated}`, {title:title, content:content, author:author, post:post, grade:grade});
      toast.success("Updated Successfully", { id: loadingToast });
      setdisplay("hidden")
      setrunUseEffect(runUseEffect + 1);
    } catch (error) {
      console.log(error);
      toast.error("Error Updating", { id: loadingToast });
    }


  }

  return (
    <main className="bg-gray-100">
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


      <Toaster position="top-center" reverseOrder={false} />
      

      <Header />
      <Navbar />


    {/* Modal */}
      <div className={`h-auto ${display} md:w-[500px] w-[300px] bg-gray-200 fixed z-50 top-32 md:top-12 border py-3 left-[50px]  md:left-[500px] shadow-lg `}>
        <div className="flex  items-center justify-between px-3 py-2 my-2">
          <h1 className="text-xl font-mono text-gray-600">Edit Blog</h1>
          <XIcon onClick={()=>setdisplay("hidden")} className={`h-6 w-6 text-gray-600 cursor-pointer `}/>
        </div>

        <section className="w-full">
          <div  className="flex flex-col space-y-3 w-full px-3 select-none">
          <input
            type="file"
            id="photo"
            name="photo"
            className="self-start file:cursor-pointer mb-4 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 cursor-pointer "
          />
            <input  value= {author} onChange={e=>setAuthor(e.target.value)} name="name" type="text" placeholder="Your name" className="form-item placeholder:text-gray-600 bg-transparent border border-gray-600" />
           <select value={post} onChange={e=>setPost(e.target.value)}  name="post" id="post" className="form-item placeholder:text-gray-600 bg-transparent border border-gray-600">
             <option value="teacher">Teacher</option>
             <option value="student">Student</option>
           </select>
           <input value={grade} onChange={e=>setGrade(e.target.value)} name="grade" type="number" min={1} max={12} placeholder="Your Grade" className="form-item placeholder:text-gray-600 bg-transparent border border-gray-600" />
           <input value={title} onChange={e=>setTitle(e.target.value)} name="title" type="text" placeholder="Title of your blog" className="form-item placeholder:text-gray-600 bg-transparent border border-gray-600" />
           <textarea value={content} onChange={e=>setContent(e.target.value)} className="text-sm bg-transparent border border-gray-600 placeholder:text-gray-600 font-light px-3 font-Roboto outline-none text-gray-600" name="content" id="content" cols="50" rows="5" placeholder="Your content here"></textarea>
           <button onClick={handleEditButtonClick} className="bg-red-600 py-2 text-gray-100 hover:bg-red-700 transition-all active:scale-90 duration-300 ease-in " type="submit">Edit</button>

          </div>
        </section>
      </div>
      {/* Modal */}
      <div
        className={display==="hidden"?"md:h-[500px] h-[500px] bg-fixed  bg-bottom  bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center relative":"md:h-[500px] opacity-40 h-[500px] bg-fixed  bg-bottom  bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center relative"}
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-gray-900 text-center text-4xl font-bold font-mono md:text-5xl">
          BLOGS
        </h1>
        <button
          onClick={handleAddABlogClick}
          className="bg-blue-800 px-5 py-4 shadow-xl rounded-md hover:bg-blue-900 transition-all duration-300 "
        >
          Add a Blog
        </button>
        <RefreshIcon
          onClick={() => setrunUseEffect(runUseEffect + 1)}
          className="h-10 w-10 absolute right-3 top-0 text-blue-700 cursor-pointer hover:-rotate-180  transition-transform duration-300 ease-out active:scale-125 z-40"
        />
      </div>

      {!loading ? (
        <section className="px-8 py-8 grid md:grid-cols-3 grid-cols-1 md:gap-x-8 gap-y-32 md:gap-y-20">
          {blogs.map((blog) => (
            <SingleBlog
              blog={blog}
              key={blog._id}
              id={blog._id}
              title={blog.title}
              content={blog.content}
              thumbnail={blog.thumbnail}
              author={blog.author}
              email={blog.email}
              createdAt={blog.createdAt}
              runUseEffect={runUseEffect}
              setrunUseEffect={setrunUseEffect}
              display={display}
              setdisplay={setdisplay}
              grade = {blog.grade}
              post={blog.post}
              
              getId={getId}
            />
          ))}
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center h-[400px] w-screen bg-gray-100">
          <SpinnerCircularFixed color="red" size={50} thickness={200} />
        </div>
      )}

      {blogs.length === 0 && !loading ? (
        <div className="flex flex-col justify-center items-center h-[400px] w-screen bg-gray-100">
        <h1>No blogs yet</h1>
      </div>
      ):""}

      
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Blog;
