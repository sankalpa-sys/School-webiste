import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import ReserveSeat from "./components/ReserveSeat";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from "axios";
import Head from "next/head";
import { useSession } from "next-auth/react"
function Addblog() {
  const { data: session } = useSession()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("")
  const [post, setPost] = useState("teacher")
  const [grade, setGrade] = useState(null)
  const [img, setImg] = useState(null);
  const handleSubmit = async (e) => {
    console.log("submit started");
    e.preventDefault();
    if (img !== null) {
      const fileName = new Date().getTime() + img.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            axios.post("/api/blog", {title: title, content: content,author: name, post: post, grade: grade, thumbnail:downloadURL}).then((alert("Blog Added"))).catch((err)=>console.log(err))
          });
        }
      );
    } else {
      console.log("no image");
    }

  };

  console.log(session?session.user:"no session")

  return (
    <main className="">
      <Head>
        <title>Add a blog</title>
        <meta
          name="description"
          content="Add a blog so that you can share your thoughts with other students and teachers."
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
        className="md:h-[500px] h-[500px] bg-fixed  bg-right  bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-gray-900  font-bold font-Lora text-7xl">
          Add a Blog
        </h1>
      </div>

      <section className="md:w-[80%] w-[90%] mx-auto my-20">
        <form
          className="flex w-full  flex-col space-y-6 justify-center items-start"
          onSubmit={handleSubmit}
        >
          <label htmlFor="photo" className="mx-4 font-bold text-red-400">
            Thumbnail:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(e) => setImg(e.target.files[0])}
            className="self-start file:cursor-pointer mb-4 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 cursor-pointer "
          />
          <input
            type="text"
            placeholder="Your name"
            className="w-full h-auto outline-none mx-2 md:mx-4  text-sm text-zinc-800 border-b border-slate-300  p-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select className="w-full h-auto outline-none mx-2 md:mx-4   text-sm text-zinc-800 border-b border-slate-300  p-1" onChange={(e) => setPost(e.target.value)} name="post" id="post">
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>

          <input
            type="number"
            placeholder="Your grade"
            className="w-full h-auto outline-none mx-2 md:mx-4   text-sm text-zinc-800 border-b border-slate-300  p-1"
            value={grade}
            max={12}
            min={1}
            onChange={(e) => setGrade(e.target.value)}
          />

          <input
            type="text"
            placeholder="Title"
            className="w-full h-auto outline-none mx-2 md:mx-4 font-semibold md:font-bold text-lg text-zinc-800 border-b border-slate-300  p-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full mt-4 border-b text-gray-600 border-slate-300 text-sm outline-none flex justify-start font-Lobster  px-2 md:px-2 scrollbar-hide rounded-xl h-auto"
            name=""
            id=""
            cols="30"
            rows={10}
            placeholder=" Your content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button disabled={!session}
            className="bg-green-600 rounded-full text-white px-4 py-2 shadow-xl hover:bg-blue-600 shadow-green-700/80 hover:shadow-blue-700/80 font-serif disabled:hover:bg-green-600 disabled:active:scale-100 disabled:opacity-40 disabled:shadow-none active:scale-90 transform transition duration-75 ease-out"
            type="submit"
          >
            Publish
          </button>
        {!session && (  <p className=" text-sm text-red-600">You need to sign in to add a blog!</p>)}
        </form>
      </section>
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Addblog;
