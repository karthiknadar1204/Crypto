// import React from 'react'
// import {  Heading, Image, Text, VStack } from '@chakra-ui/react'
// import { Link } from 'react-router-dom'
//     const  CoinCard=({id,name,img,symbol,price,currencySymbol="₹"})=>(

//         <Link to={`/coin/${id}`} >
//           <VStack w={"52"} 
//           shadow={'lg'}
//           p={'8'}
//           borderRadius={'lg'}
//           transition={'all 0.3s'}
//           m={'4'} 
//           css={{
//             '&:hover':{
//               transform:'scale(1.1)'
//             }
//           }}
          
//           >
//             <Image 
//             src={img}
//             w={'10'}
//             h={'10'}
//             objectFit={'contain'}
//             alt='exchange'
//             />
      
//             <Heading size={'md'} noOfLines={1} >
//               {symbol}
//             </Heading>
      
//             <Text noOfLines={1} >
//               {name}
//             </Text>

//             <Text noOfLines={1} >
//               {price?`${currencySymbol} ${price}`:"NA"}
//             </Text>
      
//           </VStack>
      
//         </Link>
//       )
  


// export default CoinCard



import React from 'react';
import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = '₹' }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={'80'}
      h={'80'}
      shadow={'lg'}
      p={'8'}
      transition={'all 0.3s'}
      m={'4'}
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image src={img} boxSize={40}  objectFit={'contain'} borderRadius={'full'} alt='coin' />

      <Heading size={'lg'} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1} fontSize={'xl'} fontWeight={'bold'}>
        {name}
      </Text>

      <Text noOfLines={1} fontSize={'lg'}>
        {price ? `${currencySymbol} ${price}` : 'NA'}
      </Text>
    </VStack>
  </Link>
);

export default CoinCard;
