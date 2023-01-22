import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Navbar from '../components/Navbar/Navbar'
import Banner from "../components/Banner/Banner"

const Item = () => {

    return (
        <>
        <Navbar/>
        <Banner/>
        <ItemDetailContainer/>
        </>
    )
}

export default Item