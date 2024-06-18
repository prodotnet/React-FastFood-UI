
import React from 'react'
import Navbar from './componenets/NavBag/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeOrder/placeOrder'
import Footer from './componenets/Footer/Footer'



const App = () => {
  return (

    <>
      <div className='app'>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />


        </Routes>


      </div>
      <Footer />
    </>
  )
}

export default App

