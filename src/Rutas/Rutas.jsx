import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Views/Home'
import Category from '../Views/Category'
import Cart from '../Views/Cart'
import Individual from '../Views/Individual'

const Rutas = () => {

    return (
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/category/:categoria' element={<Category/>} />
                <Route path='/item/detail/:id' element={<Individual/>} />
                <Route path='/cart' element={<Cart/>} />                                                 
            </Routes>
    )
}

export default Rutas
