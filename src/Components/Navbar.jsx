import React from "react";
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
import NavbarDrdn from "./NavbarDrdn";

const Navbar = () => {

  return (
    <Stack fontSize={12}>
      <NavbarDrdn/>
      <HStack>
        <Link to="/">{<LandingPage />}</Link>
        <Link to="/Cart">{<CartPage />}</Link>
        <Link to="/Payment">{<PaymentPage />}</Link>
        <Link to="/Product">{<ProductPage />}</Link>
        <Link to="/SingleProduct">{<SingleProductPage />}</Link>
      </HStack>
    </Stack>
  );
};

export default Navbar;
