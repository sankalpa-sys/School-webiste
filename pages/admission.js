import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Calendar } from "react-date-range";
import BottomFooter from "./components/BottomFooter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import axios from "axios";
import { useRouter } from "next/router";
import moment from "moment";

function Admission() {
  const router = useRouter();
  const [registrationInfo, setregistrationInfo] = useState([]);
  const getRegistrationInfo = async () => {
    const res = await axios.get("api/varna");
    setregistrationInfo(res.data);
  };

  useEffect(() => {
    getRegistrationInfo();
    
  }, []);

  // useEffect(() => {
  //   if (registrationInfo.length !== 0) {
  //     router.push("/admission");
  //   } else {
  //     router.push("/about");
  //   }
  // }, [registrationInfo]);

  
  const [selectedDate, setselectedDate] = useState(Date.now());

  const handleSelect = (date) => {
    setselectedDate(date);
  };
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "male",
    address1: "",
    address2: "",
    city: "",
    province: "province1",
    email: "",
    phone: "",
    availableClasses: "",
    birthDate: selectedDate,
  });

  const handleChange = (e) => {
    setStudentDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/registration", {
        birthDate: selectedDate,
        firstName: studentDetails.firstName,
        lastName: studentDetails.lastName,
        middleName: studentDetails.middleName,
        gender: studentDetails.gender,
        address1: studentDetails.address1,
        address2: studentDetails.address2,
        city: studentDetails.city,
        province: studentDetails.province,
        email: studentDetails.email,
        phone: studentDetails.phone,
        class: studentDetails.availableClasses,
      });
      alert("Registered!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <Head>
        <title>Kyamin School admission</title>
        <meta
          name="description"
          content="You can register your name in any class in our school. We are open to all students."
        />
      </Head>
      <Header />
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="lg:max-w-6xl bg-gray-100 mx-auto px-4 py-4 my-4"
      >
        <h1 className="font-bold text-4xl tracking-wider font-mono">
          Student Registration Form
        </h1>
        <p className="text-gray-600 text-lg text-light mt-1 ml-1 mb-8">
          Fill out the form carefully for registration
        </p>
        <div className="text-lg flex space-x-1 text-light mt-1 ml-1 mb-8">
         <p className="font-bold text-red-600">Deadline</p>:<p className="font-bold text-red-500">{moment(registrationInfo[0]?.deadline).endOf('day').fromNow()}</p>
        <p className="text-sm mt-1 text-red-400">( {moment(registrationInfo[0]?.deadline).format("MMM Do YY")})</p>

          
        </div>
        <div>
          <h4>Student Name</h4>

          <section className="flex w-full space-x-4 py-2">
            <div className="w-1/3">
              <input
                name="firstName"
                onChange={handleChange}
                className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
                type="text"
              />
              <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
                first name
              </p>
            </div>
            <div className="w-1/3 ">
              <input
                name="middleName"
                onChange={handleChange}
                className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
                type="text"
              />
              <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
                middle name
              </p>
            </div>
            <div className="w-1/3">
              <input
                name="lastName"
                onChange={handleChange}
                className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
                type="text"
              />
              <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
                last name
              </p>
            </div>
          </section>

          <section className="flex items-center justify-between ">
            <div className="w-1/3">
              <Calendar
                maxDate={new Date()}
                color="red"
                date={selectedDate}
                onChange={handleSelect}
              />
              <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
                Birth Date
              </p>
            </div>

            <div className="w-1/3">
              <select
                name="gender"
                onChange={handleChange}
                className="w-full  text-sm outline-none px-2 py-2 border border-cyan-400"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
                Gender
              </p>
            </div>
          </section>
        </div>

        <div className="w-3/4 mt-6">
          <select
            name="availableClasses"
            onChange={handleChange}
            className="w-full  text-sm outline-none px-2 py-2 border border-cyan-400"
          >
            {registrationInfo[0]?.class.map((m) => (
              <option key={m.value} value={m.value}>{m.label}</option>
            ))}
          </select>
          <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
            Available Classes
          </p>
        </div>

        <div className="my-8">
          <h4 className="mb-2 mt-4 ml-1">Student Address</h4>
          <input
            name="address1"
            onChange={handleChange}
            className="w-3/4 text-sm outline-none px-2 py-2 border border-cyan-400"
            type="text"
          />
          <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
            Address Line 1
          </p>
        </div>
        <div className="my-4">
          <input
            name="address2"
            onChange={handleChange}
            className="w-3/4 text-sm outline-none px-2 py-2 border border-cyan-400"
            type="text"
          />
          <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
            Address line 2
          </p>
        </div>
        <section className="flex space-x-4">
          <div className="my-4 w-1/2">
            <input
              name="city"
              onChange={handleChange}
              className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
              type="text"
            />
            <p className="uppercase text-xs text-gray-600 mt-2 ml-1">city</p>
          </div>
          <div className="my-4 w-1/2">
            <select
              name="province"
              onChange={handleChange}
              className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
            >
              <option value="province1">Province 1</option>
              <option value="province2">Province 2</option>
              <option value="province3">Province 3</option>
              <option value="province4">Province 4</option>
              <option value="province5">Province 5</option>
            </select>
            <p className="uppercase text-xs text-gray-600 mt-2 ml-1">
              province
            </p>
          </div>
        </section>

        <h4 className="mt-4 mb-1 ml-1">Contact</h4>
        <section className="flex w-full space-x-4 py-2">
          <div className="w-1/2">
            <input
              name="email"
              onChange={handleChange}
              className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
              type="email"
            />
            <p className="uppercase text-xs text-gray-600 mt-2 ml-1">email</p>
          </div>
          <div className="w-1/2 ">
            <input
              name="phone"
              onChange={handleChange}
              className="w-full text-sm outline-none px-2 py-2 border border-cyan-400"
              type="text"
            />
            <p className="uppercase text-xs text-gray-600 mt-2 ml-1">phone</p>
          </div>
        </section>

        <button
        disabled={!registrationInfo.length}
          className="bg-black disabled:cursor-not-allowed text-white font-semibold px-8 hover:opacity-80 py-2 mt-4"
          type="submit"
        >
          Register
        </button>
      </form>
      <Footer />
      <BottomFooter />
    </main>
  );
}

export default Admission;
