import React from 'react'
import { Link } from 'react-router-dom'
import CartPage from '../Pages/CartPage'
import LandingPage from '../Pages/LandingPage'
import PaymentPage from '../Pages/PaymentPage'
import ProductPage from '../Pages/ProductPage'
import SingleProductPage from '../Pages/SingleProductPage'
import { Image,Box } from '@chakra-ui/react'


const Navbar = () => {
   const Logo = "../Image/BingeBuy.png"
  return (
    <>
    <Box boxSize='sm'>
  <Image src={Logo} alt='Dan Abramov' />
</Box>
    <Link to="/">{<LandingPage/>}</Link>
    <Link to="/Cart">{<CartPage/>}</Link>
    <Link to="/Payment">{<PaymentPage/>}</Link>
    <Link to="/Product">{<ProductPage/>}</Link>
    <Link to="/SingleProduct">{<SingleProductPage/>}</Link></>
  )
}

export default Navbar
