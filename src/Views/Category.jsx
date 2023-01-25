import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from "../components/Navbar/Navbar";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Footer from '../components/Footer/Footer'
import Banner from "../components/Banner/Banner"

const Category = () => {
    const {category} = useParams()

  return (
    <>
      <Navbar />      
      <Banner/>
      <ItemListContainer filtro={category} />
      <Footer />
    </>
  )
}

export default Category