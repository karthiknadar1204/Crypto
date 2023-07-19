import { Button, HStack,Spacer } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} spacing={6} shadow={'base'} bgColor={'blackAlpha.900'}>

      <HStack spacing={6}>
  <Spacer />
  <Button variant="unstyled" color="white">
    <Link to="/" style={{ fontSize: '1.2rem' }}>
      Home
    </Link>
  </Button>

  <Button variant="unstyled" color="white">
    <Link to="/exchanges" style={{ fontSize: '1.2rem' }}>
      Exchanges
    </Link>
  </Button>

  <Button variant="unstyled" color="white">
    <Link to="/coins" style={{ fontSize: '1.2rem' }}>
      Coins
    </Link>
  </Button>
</HStack>
    </HStack>
  );
};

export default Header;
