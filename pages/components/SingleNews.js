import React from "react";

function SingleNews() {
  return (
    <main className=" h-auto  w-96 shadow-lg my-4">
      <div className="bg-green-400 h-56 w-full">
            <img src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="h-full w-full object-cover object-top" />
      </div>

      <div className="my-6 px-3 flex flex-col items-start justify-start space-y-3">
          <h1 className="font-semibold font-mono">
             School News
          </h1>
          <p className="font-light text-xs">Apr 13, 2022</p>
      </div>
      <p className="font-light px-3 text-gray-600 font-Lora">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat placeat officia, necessitatibus perferendis temporibus dolores eum recusandae ut eaque molestias veniam, praesentium consectetur beatae dignissimos repellat vero exercitationem obcaecati.
         
      </p>
      <button className="my-3 mx-3 hover:bg-indigo-900  bg-indigo-800 text-white px-3 text-sm shadow-xl py-2 rounded-lg">Read More</button>
    </main>
  );
}

export default SingleNews;
