import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ReserveSeat from "./components/ReserveSeat";
import Footer from "./components/Footer";
import BottomFooter from "./components/BottomFooter";
import SocialIcons from "./components/SocialIcons";
import Head from 'next/head'
import Image from "next/image";
import { useRouter } from "next/router";

function About() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Kyamin secondary School is a co-ed Nepali medium school from PG to secondary level. The school was established in the year 1996 AD with the purpose of enhancing holistic development of students in a genial environment through innovative methodology. The school is located at Shantinagar, New Baneshwor, Kathmandu, Nepal. It has 700 plus students at present. The school aims to enhance all round development of students in an amiable educational environment through inventive methodologies. It offers activities and programs that help harmonious development of personality in loving and caring environment. The school is best known for individual centered learning approach. The courses cover the curriculum prescribed by the CDC, Nepal." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

      </Head>
      <Header/>
      <Navbar/>
      <div
        className="h-screen bg-fixed bg-center w-screen  bg-no-repeat bg-cover text-gray-300 flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <h1 className="text-cyan-500 font-mono text-7xl animate-pulse">
          ABOUT US
        </h1>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center w-screen space-y-2 my-8 px-8">
        <div className="w-[90%] flex flex-col justify-center space-y-4 items-center px-24">
          <h2 className="featurette-heading text-bold w-60 ml-4 text-yellow-600 text-2xl">
            Introduction{" "}
          </h2>
          <p className="lead text-sm text-justify md:w-full md:text-base w-screen px-8 mt-3  text-gray-600">
            Kyamin secondary School is a co-ed Nepali medium school from PG to
            secondary level. The school was established in the year 1996 AD with
            the purpose of enhancing holistic development of students in a
            genial environment through innovative methodology. The school is
            located at Shantinagar, New Baneshwor, Kathmandu, Nepal. It has 700
            plus students at present. The school aims to enhance all round
            development of students in an amiable educational environment
            through inventive methodologies. It offers activities and programs
            that help harmonious development of personality in loving and caring
            environment. The school is best known for individual centered
            learning approach. The courses cover the curriculum prescribed by
            the CDC, Nepal.
          </p>
        </div>
        <div className="h-96 md:w-[40%] w-full relative">
          <Image
            src="https://images.pexels.com/photos/207756/pexels-photo-207756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid  "
            layout="fill"
            alt="about Picture"
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row items-center w-screen space-y-2 my-8 px-8">
        <div className="w-[90%] flex flex-col justify-center space-y-4 items-center px-24">
          <h2 className="featurette-heading text-bold text-yellow-600 text-2xl">
            PHILOSOPHY{" "}
          </h2>
          <p className="lead text-sm text-justify md:w-full md:text-base w-screen px-8 mt-3  text-gray-600">
            We are open to broaden academic outreach of young learners into the
            zenith of the global standard of 21st century. We basically believe
            the uniqueness of the child and try accordingly to explore the
            uniqueness in a full scale without overbearing their creativity. Our
            teaching teams assume and nurture them to respect the opinions of
            others, draw logical conclusions of the critical questions by using
            their own senses, ingenuity, and inquisitiveness in a fearless
            environment. We duly respect the diversity of cultures in school. We
            maintain inclusiveness while treating a child so that he /she would
            feel the importance of social equity and equality in the learning
            process. We provide individual care to the students so that they
            would feel the importance of self-respect, self-discovery, and
            inclusion.
          </p>
        </div>
        <div className="h-96 md:w-[40%] w-full relative">
          <Image
            src="https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid  "
            layout="fill"
            alt="about Picture"
          />
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row-reverse items-center w-screen space-y-2 my-8 px-8">
        <div className="w-[90%] flex flex-col justify-center space-y-4 items-center px-24">
          <h2 className="featurette-heading text-bold w-60 ml-4 text-yellow-600 text-2xl">
            MISSION & VISION{" "}
          </h2>
          <p className="lead text-sm text-justify md:w-full md:text-base w-screen px-8 mt-3  text-gray-600">
            Babylon National School is a place of education excellence where
            high standards of learning are set and achievements and strengths of
            the learners are celebrated, where students are well equipped to
            meet the challenges in life and an individual student’s potential is
            maximized to help them pursue their dream.
            <br />
            <br />
            BNS strives to offer a well balanced education that encourages high
            expectations for success among the learners by offering creative,
            safe and supportive environment. This is the school where
            individual’s potentials are nurtured and celebrated to the optimum
            and overall development of a student. The school highly ensures that
            it enables students to become successful in their life in local and
            global context. The school aims to provide a stimulating learning
            environment by keeping alive passion for learning among students.
          </p>
        </div>
        <div className="h-96 md:w-[40%] w-full relative">
          <Image
            src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid  "
            layout="fill"
            alt="about Picture"
          />
        </div>
      </div>

      <div
        className="h-screen bg-fixed bg-center bg-no-repeat bg-cover text-gray-300 flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        }}
      >
        <p to="/contact">
          <button onClick={()=>router.push('/contact')} className="bg-white rounded-lg  text-black font-semibold font-serif text-center  px-6 py-4 hover:bg-black hover:border hover:text-white  transition-colors duration-300 ease-out active:scale-90 ">
            Contact Us
          </button>
        </p>
      </div>
      <ReserveSeat/>
      <Footer/>
      <BottomFooter/>
      <SocialIcons/>
    </div>
  );
}

export default About;
