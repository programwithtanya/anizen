import React from "react";

export default function Service() {
  return (
    <div className="my-16">
      <div >
        <h1 className="text-center font-bold text-3xl font-varela">Best Service for you</h1>
        <p className="text-center text-[#3A3A3A] text-base mx-2 mb-3 md:mb-1 font-varela">
          Enjoy our best service for your shopping satisfaction
        </p>
      </div>
     <div className="flex flex-wrap justify-center items-center m-2">

        <div className="flex flex-col justify-center items-center p-2 w-96 ">
          <div className=" border-2 border-[#d2d0d0] rounded-lg md:p-4 p-2">
            <span className="flex justify-center items-center mb-2">
              <i className="fa-solid fa-star mr-2 text-2xl"></i>
              <p  className="font-varela font-semibold text-2xl">Best Quality</p>
            </span>
            <p className="text-xl text-[#2F2F2F] font-varela">
              Your Satisfaction is Our Priority. Quality You Can Trust
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  p-2  w-96">
          <div className=" border-2 border-[#d2d0d0] rounded-lg md:p-4 p-2">
            <span className="flex justify-center items-center mb-2 ">
              <i className="fa-solid  fa-truck-fast mr-2 text-2xl"></i>
              <p  className="font-varela font-semibold text-2xl">Free Shipping</p>
            </span>
            <p className="text-xl text-[#2F2F2F] font-varela">
            Shop Now and Get Free Shipping on Every New Order
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center  p-2  w-96">
          <div className=" border-2 border-[#d2d0d0] rounded-lg p-2 md:p-4 ">
            <span className="flex justify-center items-center mb-2">
              <i className="fa-solid fa-shield-halved mr-2 text-2xl "></i>
              <p className="font-semibold text-2xl font-varela">Warranty </p>
            </span>
            <p className="text-xl text-[#2F2F2F] font-varela">
            Our Warranty-Backed Products Ensure Quality  and Reliability
            </p>
          </div>
        </div>
      

        </div>
    </div>
  );
}