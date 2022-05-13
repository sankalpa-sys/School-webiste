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
import { RefreshIcon } from "@heroicons/react/outline";
import ProgressBar from "@badrap/bar-of-progress";

function Blog() {
  const router = useRouter();
  const progress = new ProgressBar({
    color: "red",
  });
  const [blogs, setBlogs] = useState([]);
  const [runUseEffect, setrunUseEffect] = useState(1);
  useEffect(() => {
    const getBlogs = async () => {
      progress.start();
      const res = await axios.get("/api/blog");
      setBlogs(res.data);
      progress.finish();
    };
    getBlogs();
  }, [runUseEffect]);

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
        className="md:h-[500px] h-[500px] bg-fixed  bg-bottom  bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center realtive"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-gray-900 text-center text-4xl font-bold font-mono md:text-5xl">
          BLOGS
        </h1>
        <button
          onClick={() => router.push("/addblog")}
          className="bg-blue-800 px-5 py-4 shadow-xl rounded-md hover:bg-blue-900 transition-all duration-300 "
        >
          Add a Blog
        </button>
        <RefreshIcon
          onClick={() => setrunUseEffect(runUseEffect + 1)}
          className="h-10 w-10 absolute right-3 top-24 text-blue-700 cursor-pointer hover:-rotate-180  transition-transform duration-300 ease-out"
        />
      </div>

      {blogs.length  > 0 ? (
        <section className="px-8 py-8 grid md:grid-cols-3 grid-cols-1 md:gap-x-8 gap-y-32 md:gap-y-20">
        {blogs.map((blog) => (
          <SingleBlog
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
          />
        ))}
      </section>
      ): (
        <div className="flex flex-col justify-center items-center h-96 w-screen ">
          <h1 className="text-red-600 font-bold text-5xl font-Cursive  animate-bounce text-center">No blogs at the moment.</h1>
        </div>
      )}
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Blog;
