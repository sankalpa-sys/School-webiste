
import axios from 'axios'
import Image from 'next/image'
import React,{useState} from 'react'

function ReserveSeat() {

  const [name, setname] = useState("")
  const [classs, setclasss] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3000/api/reserveSeat', {name, email, class:classs, phone})
      alert("Successfully reserved a seat")
      setname("")
      setclasss("")
      setemail("")
      setphone("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='w-screen h-auto flex md:flex-row flex-col mt-10 '>
      <div className='md:w-1/2 w-full relative h-[500px]'>
        <Image src="https://images.pexels.com/photos/8617893/pexels-photo-8617893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" layout='fill' alt="" className=' shrink-0' />
      </div>

      <section className='md:w-1/2 w-full flex flex-col  px-4 py-4  bg-gray-200'>
          <form action="" onSubmit={handleSubmit} className='flex flex-col w-[90%] mx-auto space-y-4 my-4'>
            <input type="text" onChange={(e)=>setname(e.target.value)} value={name} placeholder='Student name' className='form-item' />
            <input type="number" max={10} min={1} onChange={(e)=>setclasss(e.target.value)} value={classs} placeholder='Class' className='form-item' />
            <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} placeholder='Email' className='form-item' />
            <input type="text" onChange={(e)=>setphone(e.target.value)} value={phone} placeholder='Phone' className='form-item' />
            <button className='bg-green-500 hover:bg-green-600 transition-colors duration-700 text-gray-200 py-4'>
              <h1 className='text-2xl font-bold'>Reserve my seat</h1>
              <p className='font-Cursive font-semibold'>( get instant access to online classes )</p>
            </button>
          </form>
          <h1 className='text-2xl underline font-mono  font-semibold ml-8 text-indigo-600 hover:text-indigo-700 cursor-pointer'>Get a free Consultation Today!</h1>
      </section>
    </main>
  )
}

export default ReserveSeat