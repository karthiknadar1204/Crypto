import React, { useEffect } from 'react';
import axios from 'axios';
import { server } from '../index';
import { useState } from 'react';
import { Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';

const Exchange = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <Error message={'Error while fetching exchanges'} />;
  }

  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} justifyContent={'center'}>
            {exchanges.map((i) => (
              <div key={i.id}>
                {' '}
                <ExchangeCard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} />{' '}
              </div>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={'blank'}>
    <VStack
      w={'80'}
      h={'80'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      transition={'all 0.3s'}
      m={'4'}
      css={{
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Image src={img} boxSize={40} objectFit={'contain'} alt="exchange" borderRadius={'full'} />

      <Heading size={'lg'} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1} fontSize={'xl'} fontWeight={'bold'}>
        {name}
      </Text>
    </VStack>
  </a>
);

export default Exchange;
