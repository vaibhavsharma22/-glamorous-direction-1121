import React from 'react'

import { Link } from "react-router-dom";
import CartPage from "../Pages/CartPage";
import LandingPage from "../Pages/LandingPage";
import PaymentPage from "../Pages/PaymentPage";
import ProductPage from "../Pages/ProductPage";
import SingleProductPage from "../Pages/SingleProductPage";
import { Image, Box, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack, Input,Select,useColorModeValue } from "@chakra-ui/react";
import Binge from "../Images/BingeBuy.png";
import { PhoneIcon, ChevronDownIcon, Search2Icon,ChevronUpIcon } from "@chakra-ui/icons";
import location from "../Images/location.png";
import person from "../Images/person.png";
import { hover } from "@testing-library/user-event/dist/hover";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react"

const NavbarDrdn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <HStack spacing={4} marginLeft="58%" marginTop={1}>
        <HStack>
          <PhoneIcon />
          <Text color="grey">1860 123 1000</Text>
        </HStack>

        <HStack>
          <Image src={location} w="20px" />
          <Text color="grey">Bilaspur, Chhattisgarh</Text>
          <ChevronDownIcon />
        </HStack>

        <HStack>
          <Image src={person} w="20px" />
          <Text color="grey">Login/Sign Up</Text>
        </HStack>
      </HStack>
      <HStack style={{ marginLeft: "5%" }}>
        <Image src={Binge} alt="Dan Abramov" w="15%" />
        <HStack spacing={0}> <input
          placeholder="Search For Products.."
          style={{
            width: "400px",
            height: 30,
            borderColor: "black",
            border: "solid",
            borderWidth: "1px",
            paddingLeft: "20px",
          }}
        ></input>
        <button
          style={{
            width: "40px",
            height: 30,
            borderColor: "black",
            backgroundColor: "RGB(133 197 37)",
          }}
        >
          <Search2Icon />
        </button></HStack>
       
        <Stack
          style={{
            width: "150px",
            height: "60px",
            backgroundColor: "RGB(228 231 234)",
            marginLeft: "22%",
            padding:"5px"
          }}
        >
          <HStack alignItems="center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5220/5220710.png"
              w={50}
            ></Image>
            <Stack>
              <Text fontSize={15} >My Basket  0 Items</Text>
             
            </Stack>
          </HStack>
        </Stack>
      </HStack>
     
      <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                w={"200px"}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg:useColorModeValue("RGB(133 197 37)", "RGB(133 197 37))") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                backgroundColor="RGB(133 197 37)"
                color="white"
            >
               <Text spacing="5px" color="white"  as='b' fontSize="15px">Shop By Category </Text>  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
        </Menu>
    </div>
  )
}

export default NavbarDrdn
