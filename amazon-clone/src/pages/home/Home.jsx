import React from "react";
import Header from "../../components/header/Header.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
import Category from "../../components/Category/Category.jsx";
import Product from "../../product/Product";
const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
};

export default Home;
