  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import Fuse from "fuse.js";
  import products from "../data.js"; // Assuming your product data is imported from this file
  import ProductNotFound from "../images/ProductNotFound.png"

  function slugify(title) {
    return title.replace(/\s/g, "-");
  }

  // Configure Fuse.js for searching
  const fuse = new Fuse(products, {
    keys: ["type", "title"], // Fields to search in
  });
  // const [mostSearch, setMostSearch] = useState(products.slice(0,3))



  export default function Search() {
    const [query, setQuery] = useState("");
    const [mostSearch, setMostSearch] = useState(products.slice(20,23))


    function handleOnChange(event) {
      const { value } = event.currentTarget;
      setQuery(value);
    }

    const results = fuse.search(query);
    const characterResult = query
      ? results.map((result) => result.item)
      : products;
      // console.log(results.length)
    
    return (

      <div className={`bg-[#E8F5E9]  ${query.length === 0 ? 'h-[40rem]' : 'h-max'}`}>
        <div className="text-center pt-5 font-Montserrat font-extrabold text-3xl">What are you looking for?</div>
         
          <div className="flex justify-center items-center flex-col  ">
        <div className="w-72 lg:w-96 mt-10">
          <div className="relative w-full min-w-[200px] h-10 ">
            <input
              value={query}
              onChange={handleOnChange}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-1 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Search
            </label>
          </div>
        </div>
      
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          
       {
         query.length===0? 
        <div>
              <div >
        <div className="py-5 text-center w-[96vw]" >
          <h1 className="text-center font-bold text-3xl font-varela   pt-2  ">
          Most searched products
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center w-[95vw] ">

          {mostSearch.map((product) => {
            return <div key={product.title}>
                <div className="flex justify-center items-center flex-col  ">
                  <div className="drop-shadow-lg bg-white flex justify-center flex-col items-center mx-5 mt-5 ">
                    <div >
                      <i className="fa-solid fa-heart fixed right-0 text-2xl mr-1 mt-1 cursor-pointer text-gray-500 "></i>

                      <img className="w-48 h-48 object-contain" src={product.image[0]} alt="product" />
                     
                    </div>
                    <div className="bg-[#003B29] text-white p-3">
                      <h2>{product.title}</h2>
                      <div className="flex flex-row">
                      <p className="line-through mr-3 text-[#F4CC5E]">{product.actualprize}</p>
                      <p>${product.price}</p>
                      </div>
              <Link to={`/product/${slugify(product.title)}`}>
              <button className="hover:bg-[#004d35] text-center underline">View <i className="fa-solid fa-arrow-right ml-1"></i></button>
              </Link>

                    </div>
                  </div>
                </div>
            </div>;
          })}
        </div>

      </div>
        </div>
        :
          results.length === 0 ? <div className="flex justify-center items-center flex-col w-[95vw]">
            <img className="w-96" src={ProductNotFound} alt="ProductNotFound" />
            <div className="font-varela text-xl font-bold">No product found :)</div>
          </div>:
           
           characterResult.map((product) => (
             
             <div key={product.title} className="bg-white shadow-md rounded-lg overflow-hidden">
               <div className="flex flex-col  p-4">
                 <div className="flex justify-center items-center">
                 <img
                   className="w-48 h-48 object-contain mb-4"
                   src={product.image[0]}
                   alt={product.title}
                 />
                 </div>
                 
                 <h2 className="text-lg font-semibold font-varela">{product.title}</h2>
                 <div className="flex items-center mt-2 mb-4">
                   <p className="line-through text-gray-500 font-varela mr-3">{product.actualprize}</p>
                   <p className="text-xl text-gray-900 font-varela">${product.price}</p>
                 </div>
                 <Link to={`/product/${slugify(product.title)}`}>
                   <button className="bg-[#003B29] text-white px-4 py-2 rounded font-varela hover:bg-[#004d35]">
                     View <i className="fa-solid fa-arrow-right ml-1"></i>
                   </button>
                 </Link>
               </div>
             </div>
           ))}
        </div>
      </div>
      </div>
    );
  }
