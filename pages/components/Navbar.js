import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
  const router = useRouter();
  const [height, setheight] = useState("h-[0px]");
  const [display, setdisplay] = useState("hidden");
  const handleClick = () => {
    if (height === "h-[0px]") {
      setheight("h-auto");
      setdisplay("flex");
    } else {
      setheight("h-[0px]");
      setdisplay("hidden");
    }
  };

  return (
    <>
      <main className="w-screen h-16 select-none bg-black text-white flex items-center justify-between pl-2 pr-2 md:pr-8 shadow-md">
        <Image
          src="https://4.bp.blogspot.com/-xQiVfurjEqg/WzOeOJ4aTdI/AAAAAAAAol0/72y9ICam56shTYXRwaUL7vhqqbTDAM80ACLcBGAs/s1600/Flag_of_Nepal.gif"
          className="h-16 w-16 p-1 rounded-lg"
          alt=""
          height={50}
          width={50}
        />
        <div>
          <MenuIcon
            onClick={handleClick}
            className="md:hidden text-cyan-600 select-none h-10 w-10 cursor-pointer"
          />
        </div>
        <div className="hidden md:flex  w-[60%] justify-between items-center">
          <Link href={"/"} passHref>
            <p
              className={
                router.pathname === "/"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Home
            </p>
          </Link>
          <Link href={"/about"} passHref>
            <p
              className={
                router.pathname === "/about"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              About Us
            </p>
          </Link>

          <Link href={"/eca"} passHref>
            <p
              className={
                router.pathname === "/eca"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              ECA
            </p>
          </Link>
          <Link href={"/staff"} passHref>
            <p
              className={
                router.pathname === "/staff"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Staff
            </p>
          </Link>

          <Link href={"/blog"} passHref>
            <p
              className={
                router.pathname === "/blog"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Blog
            </p>
          </Link>
          <Link href={"/gallery"} passHref>
            <p
              className={
                router.pathname === "/gallery"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Gallery
            </p>
          </Link>
          <Link href={"/contact"} passHref>
            <p
              className={
                router.pathname === "/contact"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Contact
            </p>
          </Link>
          <button
            onClick={() => router.push("/admission")}
            className="bg-transparent text-pink-600 border border-pink-600  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-600/30 duration-300 "
          >
            REGISTER NOW
          </button>
        </div>
      </main>
      <div
        className={`w-[90%] z-50 font-mono mt-2 mx-auto mb-4 md:hidden ${display} flex-col justify-start py-6 items-start pl-10 transition-[height] duration-700 space-y-8 text-gray-100 ${height} bg-black`}
      >
       <Link href={"/"} passHref>
            <p
              className={
                router.pathname === "/"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
             Home
            </p>
          </Link>
        <Link href={"/about"} passHref>
            <p
              className={
                router.pathname === "/about"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              About Us
            </p>
          </Link>

        <Link href={"/eca"} passHref>
            <p
              className={
                router.pathname === "/eca"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              ECA
            </p>
          </Link>
        <Link href={"/staff"} passHref>
            <p
              className={
                router.pathname === "/staff"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Staff
            </p>
          </Link>

        <Link href={"/blog"} passHref>
            <p
              className={
                router.pathname === "/blog"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Blog
            </p>
          </Link>
        <Link href={"/gallery"} passHref>
        <p
              className={
                router.pathname === "/gallery"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Gallery
            </p>
        </Link>
        <Link href={"/contact"} passHref>
            <p
              className={
                router.pathname === "/contact"
                  ? "navcomponents border-b-2 border-red-600"
                  : "navcomponents"
              }
            >
              Contact
            </p>
          </Link>
        <button
            onClick={() => router.push("/admission")}
            className="bg-transparent text-pink-600 border border-pink-600  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-600/30 duration-300 "
          >
            REGISTER NOW
          </button>
      </div>
    </>
  );
}

export default Navbar;
