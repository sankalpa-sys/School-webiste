import { UserCircleIcon, PhoneIcon, MailIcon,UserGroupIcon } from "@heroicons/react/outline";
import React, {useState} from "react";
import BottomFooter from "./components/BottomFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReserveSeat from "./components/ReserveSeat";

import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const router = useRouter();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const handleSubmit = async(e) => {
    e.preventDefault();
    const loadingtoast = toast.loading("Loading...")
    try {
      axios.post("/api/contact",{name:name, email:email, message:message})
      toast.success("Message Sent Successfully", {id: loadingtoast})
      setEmail("")
      setName("")
      setMessage("")
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <main className="font-Roboto">
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="If you have any questions, concerns or issues, we're here to help. Check here to find the answers to your questions here and get in touch with us if you need to."
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
        className="md:h-[500px] h-[500px] bg-fixed w-full  bg-center bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2017/09/02/11/04/adult-education-2706977__480.jpg")',
        }}
      >
        <h1 className="text-gray-100  font-bold font-mono text-4xl  text-center md:text-5xl">
          Contact Us
        </h1>
        <button
          onClick={() => router.push("/admission")}
          className="bg-blue-800 px-5 py-4 shadow-xl rounded-md hover:bg-blue-900 transition-all duration-300 "
        >
          Register
        </button>
      </div>

   
      <section className="md:flex md:my-4 md:mx-4">
        <div className="w-full bg-gray-200 px-4 py-4">
          <div className="flex justify-center items-start space-y-1 flex-col">
            <h1 className="font-semibold text-2xl text-blue-700">Contact US</h1>
            <p className="text-gray-500 font-semibold">Get in Touch with Us</p>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className="my-4 select-none flex flex-col justify-center items-start space-y-6"
          >
            <input 
            onChange={(e)=>setName(e.target.value)}
              type="text"
              className="h-12 text-sm w-[90%] px-3 outline-none text-gray-600"
              placeholder="Name"
              name="name"
              id="name"
              value={name}
            />
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="h-12 text-sm w-[90%]  px-3 outline-none text-gray-600"
              placeholder="Email"
              name="email"
              id="email"
              value={email}
            />
            <textarea onChange={(e)=>setMessage(e.target.value)}
              name="message"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
              className="w-[90%] text-sm px-3 py-2 outline-none text-gray-600"
              value={message}
            ></textarea>
            <button disabled={!name || !email || !message} type="submit" className="bg-blue-700 text-white py-2 px-3 rounded-lg disabled:hover:bg-blue-700 disabled:opacity-50">
              Submit
            </button>
          </form>
        </div>
        <div className="w-full px-4 py-4 ">
          <div className="h-14 w bg-yellow-500 flex items-center space-x-2 justify-center ">
            <UserCircleIcon className="h-10 w-10 text-gray-600" />
            <h1 className="text-gray-700 font-semibold">
              Need Help? We have 24/7 support
            </h1>
          </div>
          <div className="flex items-center space-x-4 py-3 ">
            <PhoneIcon className="h-6 w-6 text-green-600" />
            <div>
              <h1 className="font-semibold text-lg">Phone</h1>
              <p className="text-sm">065-560766</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-3 ">
            <MailIcon className="h-6 w-6 text-red-600" />
            <div>
              <h1 className="font-semibold text-lg">Email</h1>
              <p className="text-sm">sankalpa115@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-3 ">
            <UserGroupIcon className="h-6 w-6 text-yellow-600" />
            <div>
              <h1 className="font-semibold text-lg">Follow Us</h1>
             
            </div>
          </div>
          <div className="flex  ml-2 mt-4 mb-2 space-x-4 z-50  rounded-lg px-4 items-center py-2">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Sankhalifa.33/">
              {" "}
              <i className="fab fa-facebook fa-2x text-blue-500  cursor-pointer"></i>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"
            >
              <i className="fab fa-youtube fa-2x text-red-500  cursor-pointer"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_sankalpa_neupane/?hl=en"
            >
              <i className="fab fa-instagram fa-2x text-pink-500  cursor-pointer "></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sankalpa-neupane-215639208/"
            >
              <i className="fab fa-linkedin fa-2x text-blue-500  cursor-pointer"></i>
            </a>
          </div>
        </div>
      </section>

      <div>
        <h1 className="text-4xl text-center text-blue-700 font-semibold my-8">
          Find Us
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.817602842813!2d84.25424021503945!3d28.030050117843075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995a79a51144f35%3A0x99dce4a1478227b7!2sShree%20Kyamin%20Secondary%20School!5e0!3m2!1sen!2snp!4v1651396604635!5m2!1sen!2snp"
          width="100%"
          height="500"
          style={{ border: 0 }}
         
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Contact;
