import React from 'react'

function SocialIcons() {
  return (
    
        <div className="fixed top-1/2 ml-2 md:flex hidden flex-col  mt-4 mb-2 space-y-2 z-50 bg-gray-200 rounded-lg  w-12 items-center py-2">
          <a target="_blank" href="https://www.facebook.com/Sankhalifa.33/">
            {" "}
            <i className="fab fa-facebook fa-2x text-blue-500  cursor-pointer"></i>
          </a>
          
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCaFCokjzNa0QLTQ8ZAOyU_g"
          >
            <i className="fab fa-youtube fa-2x text-red-500  cursor-pointer"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/_sankalpa_neupane/?hl=en"
          >
            <i className="fab fa-instagram fa-2x text-pink-500  cursor-pointer "></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sankalpa-neupane-215639208/"
          >
            <i className="fab fa-linkedin fa-2x text-blue-500  cursor-pointer"></i>
          </a>
        </div>
    
  )
}

export default SocialIcons