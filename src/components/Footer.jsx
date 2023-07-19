import { Avatar, Box, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import founder from "../Assets/karthik.jpeg"


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={["16","8"]} >

        <Stack direction={['column','row']} h={'full'} alignItems={'center'} >

        <VStack w={'full'} alignItems={['center', 'flex-start']}>
  <Text fontWeight={'bold'}>About us</Text>
  <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center', 'left']}>
    This application is designed to provide users with information about cryptocurrencies and exchanges. It allows you to explore various coins, view their details, and discover different exchanges. Stay informed and make informed decisions in the world of digital currencies with our application.
  </Text>
</VStack>
        <VStack>
        </VStack>
<Flex justify="center" align="center" p="4" bgColor="blackAlpha.900" minH="100%">
  <VStack spacing="2">
    <Flex justify="center">
      <Avatar src={founder} boxSize={'28'} />
    </Flex>
    <Text>Created by Karthik Nadar</Text>
    <Text>Our Founder</Text>
  </VStack>
</Flex>
        </Stack>
    </Box>
  )
}

export default Footer