import React from "react";
import Header from "@/components/header/Header.jsx";
import Carousel from "@/components/Carousel/Carousel.jsx";
import Category from "@/components/Category/Category.jsx";
import Product from "@/components/product/Product";
import LayOut from "@/components/LayOut/LayOut";
function Landing() {
  return (
    <div>
      <LayOut>
        <Carousel />
        <Category />
        <Product />
      </LayOut>
    </div>
  );
}

export default Landing;
