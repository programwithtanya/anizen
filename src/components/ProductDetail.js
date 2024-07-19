import React from "react";
import {  useParams } from "react-router-dom";
import data from "../data.js";
import { useState } from "react";

export default function ProductDetail() {
  let { slug } = useParams();
  function deSlugify(slug) {
    return slug.replace(/-/g, " ");
  }
  const title = deSlugify(slug);
  const product = data.find(
    (prod) => prod.title.toLowerCase() === title.toLowerCase()
  );

  const [productImage, setProductImage] = useState(product.image[0]);
  const newimage = (image) => {
    setProductImage(image);
  };
  



  const [cart, setCart] = useState(
    localStorage.getItem("cart") !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  console.log("cart:", cart);
  console.log("prod:", product);

  const addToCart = () => {
    console.log("function runned");
    setCart([...cart, product]);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    
  };

  function nextImg() {
    
    
  }


  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-6 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
        
            <div className="flex justify-center items-center w-screen lg:w-auto flex-col">
           
              <img
                className="w-56 h-56 object-contain lg:w-80 lg:h-80 "
                src={productImage}
                alt={product.title}
              />

              <div className="flex flex-row mt-4">
                {product.image.map((e, index) => {
                  return (
                    <img
                      onClick={() => newimage(e)}
                      className="w-20 h-20 cursor-pointer object-contain"
                      src={e}
                      alt=""
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
         

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1
                id="title"
                className="text-gray-900 text-3xl title-font font-medium mb-1  text-center lg:text-left"
              >
                {product.title}
              </h1>
              <div className="flex mb-4"></div>
              <p className="leading-relaxed">{product.desc}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
                <button
                  onClick={()=>{addToCart()}}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
