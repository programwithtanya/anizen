import React from 'react'
import about from "../images/about.png"
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='pb-14 m-5'> 
      <div className='py-5'>
      <h1 className="text-center font-bold text-3xl font-varela  pt-2 ">
           About Us
          </h1>
      </div>
      <div className='flex flex-row justify-evenly items-center flex-wrap'>
        <div>
            <img className='lg:w-72 w-56' src={about} alt="" />
        </div>
        <div>
            <p className='lg:w-[60rem] text-[#5B5353] text-lg font-varela mb-5'> 
            Welcome to AniZen, your ultimate destination for all things anime! As passionate fans ourselves, we understand the thrill of bringing your favorite anime worlds to life. That’s why we offer a curated selection of high-quality merchandise, from action figures and plushies to apparel and accessories. Whether you’re a seasoned otaku or new to the anime scene, our store has something special for everyone.
            </p>
            {/* <Link to={"/aboutus"}> */}
            <button className='bg-black p-2 text-white cursor-pointer hover:bg-[#202020] '>
              
                Read More
            </button>
            {/* </Link> */}
        </div>
      </div>
    </div>
  )
}
