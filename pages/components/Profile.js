import React, { useState } from "react";

function Profile({ name, post, pic }) {
  const [followers, setfollowers] = useState(10);
  const [hover, sethover] = useState("hidden");
  const handleMouseEnter = () => {
    sethover("flex");
  };
  const handleMouseLeave = () => {
    sethover("hidden");
  };
  return (
    <main className=" h-[400px] w-full">
      <section
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          hover === "flex"
            ? "w-[80%] md:w-[80%] mx-auto   h-96  rounded-xl relative shadow-2xl transition-height duration-500 bg-gray-200"
            : "w-[80%] mx-auto  md:w-[80%] transition-all duration-500  relative h-72 rounded-xl shadow-2xl bg-gray-200"
        }
      >
        <div
          className={
            hover === "flex"
              ? "md:h-[40%] h-[50%]  w-[55%] md:w-[50%]  rounded-xl mx-auto relative"
              : "md:h-[60%] h-[60%] w-[60%] md:w-[50%]  rounded-xl mx-auto relative"
          }
        >
          <img
            src={pic}
            alt=""
            className="rounded-xl h-full w-full absolute -top-6 object-top"
          />
        </div>
        <div
          className={
            hover === "hidden"
              ? `mt-10 w-full flex flex-col justify-center items-center space-y-2`
              : "mt-10 mb-4 w-full flex flex-col justify-center items-center space-y-2"
          }
        >
          <h1 className="font-semibold text-sm">{name}</h1>
          <p className="text-xs text-gray-500 text-lighter">{post}</p>
        </div>

        <section
          className={`text-xs  ${hover} transition-all duration-300 w-full justify-around mt-4`}
        >
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold">342</h1>
            <p className="text-gray-500">Posts</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold">{followers}k</h1>
            <p className="text-gray-500">Followers</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold">285</h1>
            <p className="text-gray-500">Following</p>
          </div>
        </section>
        <div
          className={`w-full ${hover} dealy-300 justify-center items-center space-x-3 text-xs mt-6 absolute transition-all duration-300 bottom-6`}
        >
          <button
            onClick={() => setfollowers(followers + 1)}
            className="bg-pink-400 text-white hover:bg-pink-500 rounded-md px-6 text-light font-semibold transition-colors py-2"
          >
            Follow
          </button>
          <button className="bg-purple-400 text-white transition-colors hover:bg-purple-500 rounded-md px-6 text-light font-semibold py-2 ">
            Message
          </button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
