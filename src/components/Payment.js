import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {

  let cart = JSON.parse(localStorage.getItem("cart"));
  function totalPrice() {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += Math.round(cart[i].price);
    }
    return sum;
  }

  return (
    <div className="p-8  min-h-screen flex justify-center items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 font-varela">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-8 border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Customer Information
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    className="w-full font-varela p-2 border border-gray-300 rounded"
                    placeholder="mail@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium font-varela">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <select className="p-2 border font-varela border-gray-300 rounded-l">
                      <option>IN</option>
                      {/* Add more options as needed */}
                    </select>
                    <input
                      type="tel"
                      className="w-full font-varela p-2 border border-gray-300 rounded-r"
                      placeholder="+91 000 000 0000"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-8  border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Shipping Address
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-varela font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full font-varela p-2 border border-gray-300 rounded"
                    placeholder="Melinda Parker"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium font-varela">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    className="w-full font-varela p-2 border border-gray-300 rounded"
                    placeholder="3782 Pine Street, Draper"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium font-varela">
                      Country *
                    </label>
                    <input
                      type="text"
                      className="w-full font-varela p-2 border border-gray-300 rounded"
                      placeholder="North Macedonia"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium font-varela">
                      State *
                    </label>
                    <input
                      type="text"
                      className="font-varela w-full p-2 border border-gray-300 rounded"
                      placeholder="Alabama"
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium font-varela">
                      City *
                    </label>
                    <input
                      type="text"
                      className="w-full font-varela p-2 border border-gray-300 rounded"
                      placeholder="Alabama"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium font-varela">
                      Zipcode *
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 font-varela rounded"
                      placeholder="80695"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-8  border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Payment Method
              </h2>
              <form className="space-y-4">
                <div className="flex  flex-wrap space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio font-varela"
                    />
                    <span className="font-varela">Master Card</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio font-varela"
                    />
                    <span className="font-varela">Visa</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio font-varela"
                    />
                    <span className="font-varela">Paypal</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="payment"
                      className="form-radio font-varela"
                    />
                    <span className="font-varela">Apple Pay</span>
                  </label>
                </div>
              </form>
            </div>

            <div className="mb-8  border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Payment Info
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium font-varela">
                    Card Number *
                  </label>
                  <input
                    type="text"
                    className="font-varela w-full p-2 border border-gray-300 rounded"
                    placeholder="xxx - xxx - 6897"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium font-varela">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      className="w-full font-varela p-2 border border-gray-300 rounded"
                      placeholder="Month / Year"
                    />
                  </div>
                  <div className="flex-1 ">
                    <label className="block text-sm font-medium font-varela">
                      CVV *
                    </label>
                    <input
                      type="text"
                      className="font-varela w-full p-2 border border-gray-300 rounded"
                      placeholder="000"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div>
            <div className="mb-8  border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Checkout Receipt
              </h2>
              <div className="p-4  rounded">
                <div className="flex justify-between font-varela">
                  <span>Subtotal:</span>
                  <span>${totalPrice()}</span>
                </div>
                <div className="flex justify-between  border-b border-gray-200 mb-2 font-varela">
                  <span className="mb-2">Delivery:</span>
                  <span>$45.00</span>
                </div>

                <div className="flex justify-between font-bold font-varela">
                  <span>Total:</span>
                  <span>${totalPrice() + 45}</span>
                </div>
              </div>
            </div>

            <div className="mb-8 border-2 border-gray-200 p-5 rounded-lg">
              <h2 className="text-xl font-semibold mb-4 font-varela">
                Discount Code
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded font-varela"
                  placeholder="Enter Code here"
                />
                <button className="w-full py-2 bg-[#42908b] text-white font-semibold rounded font-varela">
                  Apply
                </button>
              </form>
            </div>
            <div className="flex justify-around">
              <Link to={"/"} className="w-1/3 py-2 text-center bg-red-500 text-white hover:bg-red-700 font-semibold rounded font-varela">
              <button >
                Cancel Order
              </button>
              </Link>
              <button className="w-1/3 py-2 bg-[#134E4A] hover:bg-green-800 text-white font-semibold rounded font-varela">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
