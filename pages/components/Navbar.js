import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Select from 'react-select';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import { Fade } from "react-reveal";
import axios from "axios";


function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [height, setheight] = useState("h-[0px]");
  const [display, setdisplay] = useState("hidden");
  const [selectedOption, setSelectedOption] = useState(null);
  const [varna, setVarna] = useState(false);
  const [registrationInfo, setregistrationInfo] = useState([])
  const [selectedDate, setselectedDate] = useState(Date.now())
  const handleClick = () => {
    if (height === "h-[0px]") {
      setheight("h-auto");
      setdisplay("flex");
    } else {
      setheight("h-[0px]");
      setdisplay("hidden");
    }
  };

  const handleSelect = (date) => {
    setselectedDate(date)
  }

  const getRegistrationInfo = async() => {
    const res = await axios.get('api/varna')
  setregistrationInfo(res.data);
  }


  useEffect(() => {
    
    getRegistrationInfo()

  }, [])

  const handleSubmit = async(e) => {
    e.preventDefault()

   

    try {
      await axios.post('/api/varna',{class:selectedOption, deadline:selectedDate})
      alert("Started")
      setVarna(false)
      getRegistrationInfo()
    } catch (error) {
     console.log(error);
    }
  }



  const options = [
    { value: 'nursery', label: 'Nursery' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
    { value: '8', label: '8' },
    { value: '9', label: '9' },
    { value: '10', label: '10' },
  ];

  

  const handleDeleteVarna = async() => {
    await axios.delete('/api/varna')
    getRegistrationInfo()
    alert("varna removed")
  }
   

  return (
    <>
      <main className="w-screen  h-16 select-none bg-black text-white flex items-center justify-between pl-2 pr-2 md:pr-8 shadow-md">
        <Image
          src="https://4.bp.blogspot.com/-xQiVfurjEqg/WzOeOJ4aTdI/AAAAAAAAol0/72y9ICam56shTYXRwaUL7vhqqbTDAM80ACLcBGAs/s1600/Flag_of_Nepal.gif"
          className="h-16 w-16 p-1 rounded-lg"
          alt=""
          height={50}
          width={50}
        />

        <MenuIcon
          onClick={handleClick}
          className="md:hidden text-cyan-600 select-none h-10 w-10 cursor-pointer"
        />

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

          {session?.user?.email === "sankalpa115@gmail.com" ? (
            registrationInfo.length === 0?(<button
              onClick={() => setVarna(true)}
              className="bg-transparent text-pink-600 border border-pink-600 hover:text-pink-500 hover:border-pink-500  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-500/40 duration-300 "
            >
              Start Varna
            </button>):(<div className="flex space-x-2">
              <button
              onClick={handleDeleteVarna}
              className="bg-transparent text-pink-600 border border-pink-600 hover:text-pink-500 hover:border-pink-500  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-500/40 duration-300 "
            >
              Remove Varna
            </button>
            <button
              onClick={() => setVarna(true)}
              className="bg-transparent text-pink-600 border border-pink-600 hover:text-pink-500 hover:border-pink-500  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-500/40 duration-300 "
            >
              Edit Varna
            </button>
            </div>)
          ) : (
            <button
              onClick={() => router.push("/admission")}
              className={`bg-transparent ${registrationInfo.length === 0 && "hidden"}  text-pink-600 border border-pink-600 hover:text-pink-500 hover:border-pink-500  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-500/40 duration-300`}
            >
              REGISTER NOW
            </button>
          )}
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
          // onClick={() => router.push("/admission")}
          className="bg-transparent text-pink-600 border border-pink-600  text-sm transition-shadow ease-out  px-5 py-3 shadow-lg hover:shadow-pink-600/30 duration-300 "
        >
          REGISTER NOWwwsssss
        </button>
      </div>
     {varna && (
      <Fade top>
         <div className="bg-black fixed  top-48 z-50 left-[470px] h-auto w-[600px] shadow-lg shadow-white">
       <form onSubmit={handleSubmit} className="py-4 px-4">
         <p className="text-white text-sm mb-2 ml-1">Select available classes</p>
       <Select
       defaultValue={selectedOption}
       onChange={setSelectedOption}
       options={options}
       isMulti={true}
     />
     <div className="w-full flex flex-col mt-6">
       <p className="text-sm text-white mb-2">Select the deadline</p>
     <Calendar
     minDate = {new Date()}
      color='red'
       date={selectedDate}
       onChange={handleSelect}
     />
     </div>

     <button className="bg-purple-600 mt-4 ml-1  text-white rounded-full text-sm px-8 py-1 hover:opacity-80 active:scale-90" type="submit">Start</button>
     
       </form>
       <XIcon onClick={()=>setVarna(false)} className="text-white h-5 w-5 absolute top-2 z-50 right-4 cursor-pointer"/>
     </div>
      </Fade>
     )}
    </>
  );
}

export default Navbar;
