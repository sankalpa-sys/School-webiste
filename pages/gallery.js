import { ChevronDoubleLeftIcon,ChevronDoubleRightIcon, XIcon } from "@heroicons/react/outline";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import BottomFooter from "./components/BottomFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReserveSeat from "./components/ReserveSeat";

function Gallery({images}) {
  const router = useRouter()
  const [starting, setStarting] = useState(0)
  const [end, setEnd] = useState(15)
  const [view, setView] = useState(false)
  const [viewingImage, setviewingImage] = useState("")

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      });
    }
    scrollToTop()
  }, [starting, end])
  const handlePreviousClick = () => {
    setStarting(starting - 15)
    setEnd(end - 15)
    
  }

  const handleNextClick = () => {
    setStarting(starting + 15)
    setEnd(end + 15)
  }

  const handleImageClick = (img) => {
    setView(true)
    setviewingImage(img);
  }
  return (
    <main className="">
      <Head>
        <title>Kyamin School Photo Gallery</title>
        <meta
          name="description"
          content="Photos of different events, programs, aniversary and many award ceremonies of Kyamin Higher Secondary School."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Header />
      <Navbar />
      <div className={view? "w-screen md:h-[600px] h-[400px] relative opacity-30 transition-opacity duration-300": "w-screen md:h-[600px] h-[400px] relative transition-opacity duration-300"}>
        <Image
          src="https://images.pexels.com/photos/236172/pexels-photo-236172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          layout="fill"
          alt=""
        />

        <h1 className=" text-blue-700 absolute left-[150px] md:left-[670px] md:top-[80px] top-[20px]  font-bold text-2xl md:text-4xl mt-10">
          Gallery
        </h1>
        <button
          onClick={() => router.push("/admission")}
          className="absolute md:left-[650px]  md:top-[400px] top-[320px] left-[120px] transition-colors duration-300 bg-black hover:bg-white hover:text-black text-white py-5 px-10 shadow-lg animate-bounce "
        >
          REGISTER &rarr;
        </button>
      </div>
      {/* Photos */}
      <section className={view? "screen grid grid-cols-2 md:grid-cols-3 my-4 gap-2 px-2 transition-all duration-300  opacity-30 ":"screen grid grid-cols-2 md:grid-cols-3 my-4 gap-2 px-2 transition-all duration-300 "}>
       {images.slice(starting,end).map((image)=>(
          <Image onClick={()=>handleImageClick(image.img)} className={view?"cursor-pointer transition-opacity duration-300 opacity-30":"cursor-pointer hover:opacity-60 transition-opacity duration-300"} key={image.id} src={image.img} layout='responsive' alt="" height={50} width={50}/>
       ))}
        
      </section>

      {view && (
        <div className="md:h-3/4 h-1/2  md:w-1/2 w-[80%] mx-auto fixed md:top-32 top-48 md:left-72 left-10 shadow-xl rounded-lg ">
        <Image src={viewingImage} className="w-full h-full rounded-lg" alt="" layout="fill" />
        <XIcon onClick={()=>setView(false)} className="h-8 w-8 absolute top-0 text-blue-100 right-0 m-2 cursor-pointer"/>
      </div>
      )}

      <main className="text-gray-500 flex space-x-10 justify-center my-10">
          {starting > 0 && (<div onClick={handlePreviousClick} className="flex  flex-col space-y-3 justify-center items-center cursor-pointer">
            <ChevronDoubleLeftIcon className="h-8 w-8 text-blue-700  "/>
            <p className="text-sm">Previous</p>
          </div>)}
          {end < images.length && (<div onClick={handleNextClick} className="flex  flex-col space-y-3 justify-center items-center cursor-pointer">
            <ChevronDoubleRightIcon className="h-8 w-8 text-blue-700 "/>
            <p className="text-sm">Next</p>
          </div>)}
      </main>
        
      <ReserveSeat/>
      <Footer />
      <BottomFooter />
    </main>
  );
}
export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/images');
  const images = await res.json();
  return{
    props: {
      images: images
    }
  }
}
export default Gallery;
