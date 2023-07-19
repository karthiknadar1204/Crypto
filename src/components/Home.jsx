import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BtcSrc from "../Assets/btc.jpg"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'} >
      <motion.div style={{
        height:'80vh',
      }}

      animate={{
        translateY:"20px"
      }}

      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:'reverse'
        
      }}
      >
      <Text fontSize={'6xl'} textAlign={'center'} fontWeight={'thin'}  color={'whiteAlpha.700'}>CryptoWatchr</Text>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '-90px' }}>
  <Image 
    w={'70rem'}  // Adjust the width to your desired dimension
    h={'auto'}  // Let the height adjust automatically based on the aspect ratio
    objectFit={'contain'} 
    src={BtcSrc} 
    filter={"grayscale(1)"}
  />
</div>





      </motion.div>

    </Box>
  )
}

export default Home