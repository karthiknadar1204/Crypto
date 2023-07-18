import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'


const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'whiteAlpha.700'} minH={'48'} px={'16'} py={["16","8"]} >

        <Stack direction={['column','row']} h={'full'} alignItems={'center'} >

        <VStack w={'full'} alignItems={["center","flex-start"]} >
            <Text fontWeight={'bold'} >
                About us
            </Text>
            <Text fontSize={'sm'} letterSpacing={'widest'} textAlign={['center','left']} >We are thebest crypto trading app in India,Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non itaque possimus mollitia blanditiis aliquid, doloremque veritatis quibusdam, praesentium, laudantium tempore harum ipsa alias. Facere quod ab ex eius accusantium?
            Voluptatem reiciendis veniam quae! Deserunt nesciunt unde aliquam accusamus voluptas quo laboriosam impedit, repellendus iste fugiat blanditiis perspiciatis excepturi tempore neque, necessitatibus eaque quibusdam omnis adipisci quis odit vero! Quis?</Text>

        </VStack>


        <VStack>

        </VStack>
        <Avatar boxSize={'28'} mt={["4","0"]}/>
        <Text>Our Founder</Text>

        

        
        </Stack>

        

    </Box>
  )
}

export default Footer