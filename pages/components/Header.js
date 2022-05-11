import React from 'react'
import {MailIcon} from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
function Header() {
    const { data: session } = useSession()
  return (
    <main className='w-screen select-none'>
        <section className='w-full h-12 bg-blue-700 flex items-center justify-between px-4'>
            <div className='text-white flex text-xs items-center'>
                <MailIcon className="w-4 h-4"/>
                <p>info@kyamin.edu.np</p>
            </div>

            <div className=' h-full space-x-4 text-xs flex items-center '>
                
                {session?(
                    <div className='flex  text-white h-full space-x-3 items-center py-1'>
                        <div className=' h-full w-10 rounded-full relative'>
                                <Image className='rounded-full' src={session.user.image?session.user.image: ""} layout="fill"/>
                        </div>
                        <button className='bg-black h-full text-white w-20' onClick={() => signOut()}>Sign out</button>
                    </div>

                ):( <button className='bg-black h-full text-white w-20 my-1' onClick={() => signIn()}>Sign in</button>)}
            </div>
        </section>
    </main>
  )
}

export default Header