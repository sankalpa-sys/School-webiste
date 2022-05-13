import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";
import axios from "axios";
import { useSession } from "next-auth/react";

function SingleBlog({
  id,
  title,
  content,
  thumbnail,
  author,
  createdAt,
  runUseEffect,
  setrunUseEffect,
  email,
}) {
  const { data: session } = useSession();
  const router = useRouter();
  
  const handleReadMoreClick = (id) => {
    router.push(`/readblog/${id}`);
  };
  const handleEditClick = () => {

  };

  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(`/api/singleblog/${id}`);
      setrunUseEffect(runUseEffect + 1);
    } catch (error) {}
  };
  return (

    
    <main className=" font-Roboto shadow-xl rounded-lg ">
        
      <div className="w-full ">
        <Image
          src={thumbnail}
          className={"rounded-t-lg"}
          height={70}
          width={100}
          layout="responsive"
          alt=""
        />
      </div>

      <section className="px-4 flex space-y-3  flex-col py-8 border-r border-b border-l rounded-b-lg">
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
        <p className="text-sm text-gray-600  first-letter:uppercase first-letter:text-yellow-600 first-letter:font-bold first-letter:text-xl">
          {content ? content.slice(0, 150) + " " + "..." : ""}
        </p>

        <section className="flex items-center justify-between">
          <button
            onClick={() => handleReadMoreClick(id)}
            className="self-start bg-green-500 text-white px-3 py-2 text-sm rounded-md hover:bg-green-600 transition-colors "
          >
            Read More
          </button>

          {session &&
            (session.user.email === "sankalpa115@gmail.com" ||
              session.user.email === email) && (
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleEditClick(id)}
                  className="self-start bg-blue-500 text-white px-3 py-2 text-sm rounded-md hover:bg-blue-600 transition-colors "
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteClick(id)}
                  className="self-start bg-red-500 text-white px-3 py-2 text-sm rounded-md hover:bg-red-600 transition-colors "
                >
                  Delete
                </button>
              </div>
            )}
        </section>
      </section>

      
     
    </main>

  );
}

export default SingleBlog;
