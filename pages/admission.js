import Head from "next/head";
import React from "react";
import BottomFooter from "./components/BottomFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function Admission() {
  return (
    <main>
      <Head>
        <title>Kyamin School admission</title>
        <meta
          name="description"
          content="You can register your name in any class in our school. We are open to all students."
        />
      </Head>
      <Header/>
      <Navbar/>
      <div className="bg-gradient-to-r to-blue-500 from-green-500 h-screen w-full flex items-center justify-center">
        <h1 className="text-5xl text-gray-200 font-Cursive">Coming Soon!</h1>
      </div>
      <Footer/>
      <BottomFooter/>
    </main>
  );
}

export default Admission;
