import React from 'react'
import {MailIcon, PhoneIcon} from '@heroicons/react/outline'
function Header() {
  return (
    <main className='w-screen select-none'>
        <section className='w-full h-12 bg-blue-700 flex items-center justify-around'>
            <div className='text-white flex text-xs items-center'>
                <MailIcon className="w-4 h-4"/>
                <p>info@kyamin.edu.np</p>
            </div>

            <div className=' h-full space-x-3 text-xs flex items-center '>
                <p className='text-gray-200'>e-School</p>
                <span className='flex items-center bg-red-500 px-2  h-full text-gray-200'>
                    <PhoneIcon className="w-4 h-4"/>
                    <p>065-560766</p>
                </span>
            </div>
        </section>
    </main>
  )
}

export default Header