import React from "react";

export default function Review() {
  return (
    <div>
      <section className="text-gray-600 bg-[#F5F5DC] body-font ">
        <div className="container px-5 pt-10 pb-14 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center font-varela">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white shadow-md p-8 rounded">
                <div className="mb-2">
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                </div>
                
                
                <p className="leading-relaxed mb-4 font-varela">
                Absolutely love this product! Exceeded my expectations in every way
                </p>
                
                  <span className="flex-grow flex flex-col ">
                    <span className="title-font font-medium text-gray-900 font-varela">
                      - David
                    </span>
                    <span className="text-gray-500 text-sm font-varela">Kolkata</span>
                  </span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white shadow-md p-8 rounded">
              <div className="mb-2">
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                </div>
                
                <p className="leading-relaxed mb-6 font-varela">
                Fantastic quality and quick delivery. Highly recommended!
                </p>
                
                  <span className="flex-grow flex flex-col ">
                    <span className="title-font font-medium text-gray-900 font-varela">
                      - John
                    </span>
                    <span className="text-gray-500 text-sm font-varela">Mumbai</span>
                  </span>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white shadow-md p-8 rounded">
              <div className="mb-2">
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                <i className="fa-solid fa-star mr-2 text-2xl text-[#F4CC5E]"></i>
                </div>
                
                <p className="leading-relaxed mb-6 font-varela">
                I'm so impressed with this purchase. Great value for the price.
                </p>
                
                  <span className="flex-grow flex flex-col ">
                    <span className="title-font font-medium text-gray-900 font-varela">
                      - Isla
                    </span>
                    <span className="text-gray-500 text-sm font-varela">Agra</span>
                  </span>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
}
