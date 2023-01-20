import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import LandingPage from '../Pages/LandingPage'
import ProductPage from '../Pages/ProductPage'
import SingleProductPage from '../Pages/SingleProductPage'
import CartPage from '../Pages/CartPage'
import PaymentPage from '../Pages/PaymentPage'

const AllRoutes = () => {
 
  return <> <Routes>
  <Route path="/" element={<LandingPage/>}></Route>
  <Route path="/Product" element={<ProductPage/>}></Route>
  <Route path="/SingleProduct/:id" element={<SingleProductPage/>}></Route>
  <Route path="/Cart" element={<CartPage/>}></Route>
  <Route path="/Payment" element={<PaymentPage/>}></Route>
 </Routes>

  <Link to="/Cart">{<CartPage />}</Link>
  <Link to="/Payment">{<PaymentPage />}</Link>
  <Link to="/Product">{<ProductPage />}</Link>
  <Link to="/SingleProduct">{<SingleProductPage />}</Link>
  </> 
}

export default AllRoutes


