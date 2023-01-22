import React from 'react'
import {Image,Box,HStack,Badge} from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'

const CartPage = () => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }
  return (
    <div>
      Cart Pgae
      <Image src="https://www.bigbasket.com/media/uploads/banner_images/1904223_gourmet-snacks_460_1st.jpg"
        marginTop={"10px"}/>
      <HStack>
    <Box maxW='200px' height={"300px"} borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={"https://www.bigbasket.com/media/uploads/p/s/241600_6-tata-salt-iodized.jpg"} alt={property.imageAlt} />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / wk
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? 'teal.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
      </HStack>

    </div>
  )
}

export default CartPage
