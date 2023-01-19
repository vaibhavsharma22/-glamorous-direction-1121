import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../Pages/LandingPage'
import ProductPage from '../Pages/ProductPage'
import SingleProductPage from '../Pages/SingleProductPage'
import CartPage from '../Pages/CartPage'
import PaymentPage from '../Pages/PaymentPage'

const AllRoutes = () => {
  return   <Routes>
  <Route path="/" element={<LandingPage/>}></Route>
  <Route path="/Product" element={<ProductPage/>}></Route>
  <Route path="/SingleProduct/:id" element={<SingleProductPage/>}></Route>
  <Route path="/Cart" element={<CartPage/>}></Route>
  <Route path="/Payment" element={<PaymentPage/>}></Route>
 </Routes>
}

export default AllRoutes


