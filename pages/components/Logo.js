import React from 'react'
import Image from "next/image";

function Logo() {
  return (
    <div className='flex space-x-4 justify-center items-center py-4'>
        <Image height={200} width={200} src={"https://cdn.pixabay.com/photo/2020/01/30/15/39/learn-4805783__480.jpg"}/>
        
    </div>
  )
}

export default Logo