import React from "react";
import Footer from "../components/Footer/Footer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <ItemListContainer/>
      <Footer />
    </>
  );
};

export default Home;