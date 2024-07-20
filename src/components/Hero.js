import React from 'react'
import hero from "../images/home-bg.png"
import { Link } from 'react-router-dom'
export default function Hero() {
 
  return (
   
    <div>
    <div className='bg-[#003B29] h-[90vh] lg:h-auto p-3 flex justify-center items-center flex-col mb-3 '>
      <div>
        <img src={hero} className='mb-3 sm:w-[70vw] lg:w-[38vw]' alt="hero" />
      </div>
      <div>
        <h1 className='text-white text-center mb-5 text-3xl md:text-4xl font-semibold font-Montserrat'>
        Bring home the magic of anime with our exclusive products!
        </h1>
      </div>
      <button className='bg-white flex justify-center items-center rounded-2xl p-2 lg:mb-11 '>
     <span className='mr-2'>
      <Link to={"/ProductSlider"} className='duration-500 '>
    <button className='font-Montserrat '>  Shop all</button>
    </Link>
     </span>
     <span>
     <i className="fa-solid fa-arrow-right text-black"></i>
     </span>
      </button>
    </div>
 
    </div>
  )
}
