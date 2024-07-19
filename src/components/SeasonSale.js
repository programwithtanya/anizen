import React from "react";
import { Link } from "react-router-dom";
import products from "../data.js";
import { useState } from "react";

export default function SeasonSale() {

  function slugify(title) {
    return title.replace(/\s/g, "-");
  }

  const [bestCollectionProducts, setBestCollectionProducts] = useState(products.slice(4,7))

 

  return (
    <div className="bg-[#E6E6FA] pb-14">
      <div >
        <div className="py-5" >
          <h1 className="text-center font-bold text-3xl font-varela  pt-2 ">
          End of Season Sale
          </h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center ">

          {bestCollectionProducts.map((product) => {
            return <div key={product.title}>
                <div className="flex justify-center items-center flex-col  ">
                  <div className="drop-shadow-lg bg-white flex justify-center flex-col items-center mx-5 mt-5   ">
                    <div >
                      <i className="fa-solid fa-heart fixed right-0 text-2xl mr-1 mt-1 cursor-pointer text-gray-500 "></i>

                      <img className="w-48 h-48 object-contain" src={product.image[0]} alt="product" />
                    </div>
                    <div className="bg-[#003B29] text-white p-3">
                      <h2>{product.title.slice(0,35)} - {product.desc.slice(0,18)}...</h2>
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
  );
}
