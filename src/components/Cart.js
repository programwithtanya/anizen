import React, { useState, useEffect } from "react";
import cartImg from "../images/cart.png";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  }, []);

  function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += Math.round(cart[i].price * cart[i].quantity);
    }
    return sum;
  }

  function removed(index) {
    const newArr = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== index) {
        newArr.push(cart[i]);
      }
    }
    localStorage.setItem("cart", JSON.stringify(newArr));
    setCart(newArr);
  }

  return (
    <div className="py-10 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <div className="rounded-3xl border-2 border-gray-200  lg:p-8 lg:pt-20 mb-8 bg-white p-6">
          <h2 className="title  font-bold text-4xl leading-10 mb-8 text-center text-black font-varela">
            Shopping Cart
          </h2>
          {cart.length === 0 ? (
            <div className="card-body cart">
              <div className="col-sm-12 empty-cart-cls text-center">
                <div className="flex justify-center items-center">
                  <img
                    src={cartImg}
                    className="w-20 h-20 mb-4 mr-3 lg:w-30 lg:h-30 object-cover"
                    alt="cart"
                  />
                </div>
                <h3 className="font-varela lg:text-xl">
                  <strong>Your Cart is Empty</strong>
                </h3>
                <h4 className="font-varela mb-2 lg:text-xl">
                  Add something to make me happy :)
                </h4>
                <Link to={"/bestCollection"}>
                  <button className="font-varela bg-blue-500 text-white lg:text-lg p-1 rounded-md">
                    continue shopping
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 mb-5 ">
              {cart.map((item, index) => (
                <div
                  className="flex items-center rounded-lg p-4 flex-wrap flex-col lg:flex-row bg-white border-2 border-gray-200"
                  key={index}
                >
                  <div className="lg:w-1/4 lg:flex lg:justify-center lg:items-center">
                    <img
                      src={item.image[0]}
                      alt="product"
                      className="rounded-lg object-cover w-36 h-36  "
                    />
                  </div>
                  <div className="md:w-3/4 pl-4">
                    <div className="flex justify-between items-center mb-3">
                      <h5 className=" font-bold text-2xl text-gray-900 font-varela">
                        {item.title}
                      </h5>
                      <button
                        onClick={() => removed(index)}
                        className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                            cx="17"
                            cy="17"
                            r="17"
                            fill=""
                          />
                          <path
                            className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                            d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                            stroke="#EF4444"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-500 mb-4 font-varela">
                      {item.desc.slice(0, 150)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center ">
                        <button className="mx-1 group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.5 9.5H13.5"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>

                        <button className="border font-varela border-gray-200 rounded-full w-10 aspect-square outline-none text-black font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center">
                          {item.quantity}
                        </button>
                        <button className="mx-1 group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            width="18"
                            height="19"
                            viewBox="0 0 18 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.75 9.5H14.25M9 14.75V4.25"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <h6 className="text-[#e5b830]  font-bold text-2xl font-varela">
                        ${item.price}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cart.length === 0 ? (
            <span></span>
          ) : (
            <div class="flex items-center justify-between w-full mb-6">
              <p class="font-normal text-xl leading-8 text-gray-400">
                Sub Total
              </p>
              <h6 class="font-semibold text-xl leading-8 text-gray-900">
                ${totalPrice()}
              </h6>
            </div>
          )}
          {cart.length === 0 ? (
            <span></span>
          ) : (
            <div class="flex items-center justify-between w-full pb-5 ">
              <p class="font-normal text-xl leading-8 text-gray-400">
                Delivery Charge
              </p>
              <h6 class="font-semibold text-xl leading-8 text-gray-900">
                $45.00
              </h6>
            </div>
          )}
        </div>
        {cart.length === 0 ? (
          <span></span>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200">
            <h5 className="text-gray-900  font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4 font-varela">
              Total
            </h5>

            <div className="flex items-center gap-5">
              <h6 className=" font-bold text-3xl text-[#e5b830] font-varela">
                ${totalPrice() + 45}
              </h6>
            </div>
          </div>
        )}
        {cart.length === 0 ? (
          <span></span>
        ) : (
          <div>
            <p className="text-gray-500 text-center mb-5 mt-6 font-varela">
              Shipping, taxes, and discounts are included in total price
            </p>
            <Link to={"/payment"}>
              <button className="rounded-full py-4 px-6 bg-[#e5b830] text-white font-semibold font-varela text-lg w-full transition hover:bg-[#c19204]">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
