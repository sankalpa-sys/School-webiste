import {
  LinkIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <main className="w-screen font-Roboto h-auto flex md:flex-row flex-col items-start justify-between border-t-2 text-gray-600 md:px-10 md:py-4 px-3 ">
      <section className=" flex flex-col py-4 justify-center items-start space-y-8">
       <div className="h-32 w-32 relative">
          <Image src="/kyamin.png" layout="fill"  className=" rounded-xl" alt="" />
       </div>
        <p className="w-[90%] md:w-96  text-sm">
          Kyamin Higher Secondary School is a place of education excellence
          where high standards of learning are set and achievements and
          strengths of the learners are celebrated, where students are well
          equipped to meet the challenges in life and an individual student’s
          potential is maximized to help them pursue their dream.
        </p>
        <div className="flex md:space-x-4 space-x-3 ">
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
      </section>

      <section className="py-4 h-full flex flex-col justify-center items-center  ">
        <div className="flex items-start space-x-4 ">
          <LinkIcon className="h-6 w-6 text-yellow-500 mt-1" />

          <h1 className="text-xl font-semibold text-yellow-500">Quick Links</h1>
        </div>
        <div className="grid grid-cols-2 text-gray-600 place-items-center text-xs gap-8 my-16">
          <p className="cursor-pointer hover:text-gray-900 ">Home</p>
          <p className="cursor-pointer hover:text-gray-900 ">About</p>
          <p className="cursor-pointer hover:text-gray-900 ">ECA</p>
          <p className="cursor-pointer hover:text-gray-900 ">Contact</p>
          <p className="cursor-pointer hover:text-gray-900 ">News</p>
          <p className="cursor-pointer hover:text-gray-900 ">Blog</p>
          <p className="cursor-pointer hover:text-gray-900 ">Staff</p>
          <p className="cursor-pointer hover:text-gray-900 ">Admission</p>
        </div>
      </section>
      <section className="py-4">
        <h1 className="text-xl font-semibold text-yellow-500">Contact Info </h1>
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
          <ClockIcon className="h-6 w-6 text-yellow-600" />
          <div>
            <h1 className="font-semibold text-lg">Office Hours</h1>
            <p className="text-sm">Monday - Friday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Footer;
