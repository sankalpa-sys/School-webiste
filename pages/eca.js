import { useRouter } from "next/router";
import React from "react";
import EcaCard from "./components/EcaCard";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import ReserveSeat from "./components/ReserveSeat";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Eca() {
  const router = useRouter();
  const { data, error } = useSWR("/api/ecaData", fetcher);
  if (error) return <div className="h-screen w-screen flex justify-center items-center"><h1 className="text-red-600 font-bold text-2xl animate-bounce">Failed to Load</h1></div>
  if (!data) return <div className="h-screen w-screen flex justify-center items-center"><h1 className="text-blue-700 font-bold text-2xl animate-bounce">Loading...</h1></div>

  return (
    <main className="bg-gray-200 overflow-x-hidden">
      <Head>
        <title>Extra Curricular Activities</title>
        <meta
          name="description"
          content="In this
              globalizing and yet modernizing world, we need one professional
              skill to dive in the world market, which can often be learned
              inside the classroom as CCA."
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
        className="md:h-[500px] h-[500px] bg-fixed w-full bg-center bg-no-repeat bg-cover space-y-8 text-gray-300 flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-black drop-shadow-xl  font-bold font-mono text-4xl md:text-5xl  text-center">
          Extra Curricular Activities
        </h1>
        <button
          onClick={() => router.push("/admission")}
          className="bg-blue-800 px-5 py-4 shadow-xl rounded-md hover:bg-blue-900 transition-all duration-300 "
        >
          Register
        </button>
      </div>

      <section className="w-screen font-Roboto my-8">
        <div className="w-full flex flex-col items-center md:flex-row  md:space-x-8 md:px-32">
          <div className="w-[80%] ml-2">
            <h1 className="font-semibold text-xl text-gray-700 my-2 underline">
              Enhancing ECA
            </h1>
            <p className="text-gray text-sm md:text-base text-gray-800 w-full ">
              Whether it is living in the competing world of the 21st century,
              facing the face of challenge, or creating the world-impact using
              our waged mind, we have to travel out of the box and rigorously
              work to intensify the skills of real-life attributes. So, in this
              globalizing and yet modernizing world, we need one professional
              skill to dive in the world market, which can often be learned
              inside the classroom as CCA.
              <br />
              Generally, CCA and ECA are two programs in school that help to
              foster the skills of learners and benefit them to grow and groom
              their respective interests. Watching these competitive global
              traits and zooming the world challenge from a close view, Babylon
              National School has been working on a new strategy for the overall
              enhancement of ECA & CCA. Believing in consistency and quality ECA
              & CCA, a routine has been launched and implemented in the
              mid-trimester. Public Speaking, Story Writing, Story Telling,
              Essay Writing, Extempore, Elocution, Effective Communication,
              Quizzing, Vocabulary Building, etc. are the ongoing programs in
              Primary and Secondary wing. Four classes are allocated to each
              Grade in a month which rigorously goes the whole session. For
              effective implementation, the ECA department will assist and
              mentor every student and attempts to groom them at least in one
              skill. Despite learning challenges Babylon National School & ECA
              department is highly motivated to work with students and make them
              outlier in the future market. Believing in consistency and
              precision, We are often obliged to cooperate with all the
              concerned parents & stakeholders for the learning & growing
              environment.{" "}
            </p>
            <h1 className="font-semibold  text-gray-700 mt-6">
              ECA COORDINATOR
            </h1>
            <h1 className="font-semibold font-Cursive text-gray-700 my-2">
              John Cena
            </h1>
          </div>
          <div className="h-72 w-72 md:h-96  md:w-96 relative shadow-lg rounded-sm">
            <Image
              src="https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              layout="fill"
              alt=""
              className=""
            />
          </div>
        </div>
      </section>

      {/* eca cards */}
      <section className="md:px-[100px] px-4 grid grid-cols-1 md:grid-cols-2  gap-y-20  md:gap-y-24 mb-4">
        {data.map((m) => (
          <EcaCard
            key={m.id}
            title={m.title}
            desc={m.description}
            pic={m.pic}
          />
        ))}
      </section>
      <ReserveSeat />
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Eca;
