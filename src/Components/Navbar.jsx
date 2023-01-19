import React from 'react'
import { Link } from 'react-router-dom'
import CartPage from '../Pages/CartPage'
import LandingPage from '../Pages/LandingPage'
import PaymentPage from '../Pages/PaymentPage'
import ProductPage from '../Pages/ProductPage'
import SingleProductPage from '../Pages/SingleProductPage'
import { Image,Box,Text } from '@chakra-ui/react'
import { Stack, HStack, VStack,Input} from '@chakra-ui/react'
import Binge from '../Images/BingeBuy.png'
import { PhoneIcon, ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import location from '../Images/location.png'
import person from '../Images/person.png'

const Navbar = () => {
   
  return (
    <Stack fontSize={12}>
      <HStack spacing={4} marginLeft="58%">

        <HStack> <PhoneIcon />
        <Text >1860 123 1000</Text></HStack>
        
        <HStack><Image src={location} w="20px"/>
        <Text>Bilaspur, Chhattisgarh</Text>
        <ChevronDownIcon /></HStack>
        
        <HStack><Image src={person} w="20px"/>
        <Text>Login/Sign Up</Text></HStack>
        
        </HStack>
      <HStack>
    <Box boxSize='sm'>
  
  <HStack>
  <Image src={Binge} alt='Dan Abramov' w="35%"/>
  <input placeholder='Search Products' style={{width:1500,height:30,borderColor:'black',border:'1px,solid,black'}}></input>
  <button style={{width:30,height:30,borderColor:'black',border:1}}><Search2Icon /></button>
  </HStack>

</Box>
    <Link to="/">{<LandingPage/>}</Link>
    <Link to="/Cart">{<CartPage/>}</Link>
    <Link to="/Payment">{<PaymentPage/>}</Link>
    <Link to="/Product">{<ProductPage/>}</Link>
    <Link to="/SingleProduct">{<SingleProductPage/>}</Link>
    </HStack>
    </Stack>
  )
}

export default Navbar
