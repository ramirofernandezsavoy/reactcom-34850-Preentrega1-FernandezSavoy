import React from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import Footer from '../components/Footer/Footer'
const Category = () => {
    const {category} = useParams()

  return (
    <div>
      <Navbar />
      <ItemListContainer filter={category} />
      <Footer />
    </div>
  )
}

export default Category