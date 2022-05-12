import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import PricipalMessage from "../components/PricipalMessage";
import News from "../components/News";
import BasicInfo from "../components/BasicInfo";
import ReserveSeat from "../components/ReserveSeat";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Head from "next/head";

function Homes() {
  return (
    <main>
      <Head>
        
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </Head>
      <Header />
      <Navbar />
      {/* <Logo/> */}
      <Slider />
      <PricipalMessage />
      <News />

      <BasicInfo />
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Homes;
