import React,{useEffect} from 'react';
import axios from "axios";
import {server} from "../index";
import { useState } from 'react';
import { Container, HStack, Heading, Image, Text, VStack,Button } from '@chakra-ui/react';  
import Loader from './Loader';
import Error from './Error';
import CoinCard from './CoinCard';
import {RadioGroup,Radio} from "@chakra-ui/react";

const Coins = () => {

  const [coins,setCoins]=useState([]);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [page,setPage]=useState(1)
  const [currency, setCurrency] = useState("inr");

  const currencySymbol=currency==="inr"? "₹":currency==="usd"?"$":"€";

  const changePage=(page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoins=async()=>{
      try{
        const {data}= await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        console.log(data);
        setCoins(data);
        setLoading(false)
      }
      catch(error){
        setLoading(false)
        setError(true)
      }
    };
    fetchCoins();
  }, [currency,page])

  if(error){
    return <Error message={"Error while fetching coins"}/>
  }

  return (

    <Container maxW={'container.xl'} >
      {
        loading ? <Loader/>:<>
        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={"4"} >
            <Radio value={"inr"}>₹</Radio>
            <Radio value={"usd"}>$</Radio>
            <Radio value={"eur"}>€</Radio>
          </HStack>
        </RadioGroup>

        <HStack wrap={"wrap"} justify-content={"space-evenly"}>
          {
            coins.map((i)=>(
              <div> <CoinCard 
              id={i.id}
              key={i.id}
              name={i.name} 
              img={i.image} 
              symbol={i.symbol}
              price={i.current_price}
              currencySymbol={currencySymbol}
              /> </div>
            ))
          }
        </HStack>

        <HStack w={'full'} overflowX={'auto'}  p={'8'} >
          {
            btns.map((item,index)=>(
              <Button 
              key={index}
              bgColor={'blackAlpha.900'} 
              color={'white'}
              onClick={()=>changePage(index+1)} >
              {index+1}
              </Button>
            ))
          }
        </HStack>

        </>
      }
    </Container>
  )
}

const ExchangeCard=({name,img,rank,url})=>(

  <a href={url} target={' blank'} >
    <VStack w={"52"} 
    shadow={'lg'}
    p={'8'}
    borderRadius={'lg'}
    transition={'all 0.3s'}
    m={'4'} 
    css={{
      '&:hover':{
        transform:'scale(1.1)'
      }
    }}
    
    >
      <Image 
      src={img}
      w={'10'}
      h={'10'}
      objectFit={'contain'}
      alt='exchange'
      />

      <Heading size={'md'} noOfLines={1} >
        {rank}
      </Heading>

      <Text noOfLines={1} >
        {name}
      </Text>

    </VStack>

  </a>
)


export default Coins