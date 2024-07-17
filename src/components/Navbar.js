import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center' >
        <div >
          <Link to={"/"}>
      <img className='w-[45vw]  sm:w-[20vw] md:w-[15vw] lg:w-[13vw]' src={logo} alt="logo" />
      </Link>
        </div>
        <div> <span>
<Link to={"/search"}>
        <i className="fa-solid fa-magnifying-glass cursor-pointer text-black mr-2 text-2xl md:text-2xl"></i> 
        </Link>
        </span>
        <span className=' border-r-2  border-black'></span>
        <span>
          <Link to={"/cart"}>
        <i className="fa-solid fa-cart-shopping text-black ml-2 text-2xl mr-2 cursor-pointer md:text-2xl"></i>
          
          </Link>

        </span>
        </div>
    </div>
    
  )
}
