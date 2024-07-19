import React from 'react'
import Hero from './Hero';
// import ProductSlider from './ProductSlider';
import Service from './Service';
import BestCollection from './BestCollection';
import SeasonSale from './SeasonSale';
import NewArrival from './NewArrival';
import About from './About';
import Review from './Review';
// import Productdetail from './ProductDetail';


export default function Home() {
  return (
    <div>
      <Hero/>
      <Service/>
      {/* <ProductSlider/> */}
      <BestCollection/>
      <SeasonSale/>
      <NewArrival/>
      <About/>
      <Review/>
    </div>
  )
}
