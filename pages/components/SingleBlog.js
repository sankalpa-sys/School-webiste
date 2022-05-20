import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { PencilAltIcon, TrashIcon,EyeIcon  } from "@heroicons/react/solid";



function SingleBlog({
  id,
  title,
  content,
  thumbnail,
  author,
  grade,
  createdAt,
  runUseEffect,
  setrunUseEffect,
  email,
  setdisplay,
  display,
  getId,
  post
}) {
  const { data: session } = useSession();
  const router = useRouter();




  const handleReadMoreClick = (id) => {
    router.push(`/readblog/${id}`);
  };
   const  handleEditClick = (id, author,post,grade,title,content) => {
    setdisplay("inline")
    getId(id,author,post,grade,title,content)


   
  };




  const handleDeleteButtonClick = (id) => {

     toast(
      (t) => (
        <span className="flex items-center space-x-2 select-none">
         
          <p className=" font-bold  font-mono text-sm text-left">Are you sure?</p>
          <button className=" rounded-sm bg-red-600  shadow-md hover:scale-105 shadow-red-600/80 border-red-600 px-3 py-2  transition-all text-white " onClick={()=>confirmDeleteClick(id,t.id)}>Delete</button>
          <button onClick={()=>toast.dismiss(t.id)} className=" bg-gray-900 border-white rounded-sm  px-3 py-2 transition-all text-white shadow-md hover:scale-105   ">Cancel</button>
        </span>
      ), {duration: Infinity, id: "delete-toast"},
      
    );
  }
   const confirmDeleteClick = async (id,toastID) => {
     toast.dismiss(toastID)
    const loadingtoast = toast.loading("Loading...");
    try {

      await axios.delete(`/api/singleblog/${id}`);
      toast.success("Blog Deleted Successfully", { id: loadingtoast }, {duration: 3000});
      setrunUseEffect(runUseEffect + 1);
    } catch (error) {
      toast.error("Error Deleting Blog", { id: loadingtoast });
    }
  };



  
  
  return (

    
    <main className=" font-Roboto shadow-xl rounded-lg  ">
     
      <div className={display==="hidden"?"w-full ": "w-full opacity-40"}>
        <Image

          priority
          src={thumbnail}
          className={"rounded-t-lg object-cover object-top"}
          height={70}
          width={100}
          layout="responsive"
          alt=""
        />
      </div>

      <section className={display === "hidden"?"px-4  flex space-y-3  flex-col py-8 border-r  border-l rounded-b-lg bg-gray-100":"px-4 flex space-y-3  flex-col py-8 border-r border-b border-l rounded-b-lg bg-gray-100 opacity-40"}>
        <h1 className="text-xl text-gray-700 font-semibold first-letter:uppercase">
          {title}
        </h1>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-gray-500">
            {moment(createdAt).format("LL")}
          </p>
          <p className="text-gray-600 text-sm font-Cursive">by</p>
          <p className="text-blue-700 text-sm font-Cursive">{author}</p>
        </div>
        <p className="text-sm text-gray-600  truncate first-letter:uppercase first-letter:text-yellow-600 first-letter:font-bold first-letter:text-xl">
          {content}
        </p>

        <section className="flex items-center justify-between h-16">
         <div onClick={() => handleReadMoreClick(id)} className="flex cursor-pointer flex-col justify-center items-center group">
         <EyeIcon className="h-8 w-8 text-teal-600 group-hover:animate-bounce transition-transform duration-300 active:scale-90"/>
        <p className="text-teal-600 text-xs group-hover:inline-flex hidden">Read</p>
         </div>

          {session &&
            (session.user.email === "sankalpa115@gmail.com" ||
              session.user.email === email) && (
              <div className="flex items-center space-x-3">
                
                <div onClick={() => handleEditClick(id,author,post,grade,title,content)} className="flex flex-col justify-center items-center group cursor-pointer">
                <PencilAltIcon  className="h-8 w-8 text-blue-600 cursor-pointer  group-hover:animate-bounce transition-transform duration-300 active:scale-90"/>
                <p className=" text-xs group-hover:inline-flex hidden text-blue-600  ">Edit</p>
                </div>
                <div onClick={() => handleDeleteButtonClick(id)} className="flex cursor-pointer flex-col justify-center items-center group">
                <TrashIcon   className="h-8 w-8 text-red-600  cursor-pointer group-hover:animate-bounce transition-transform duration-300 active:scale-90"/>
                <p className="text-red-600 text-xs group-hover:inline-flex hidden ">Del</p>
                </div>
                
                
                
              </div>
            )}
        </section>
      </section>

      
     
    </main>

  );
}

export default SingleBlog;
