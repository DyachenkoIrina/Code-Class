import React from 'react';
import { Heading } from '@chakra-ui/react';
import '../index.css';

export default function HeadingComponent(): JSX.Element {
  return (
    <>
      <Heading fontWeight="600">Школа программирования для детей</Heading>
      <Heading fontWeight="600" color="#D9D0FF">
        КодКласс
      </Heading>
      <Heading fontWeight="400" as="h6" size="xs">
        Научим вашего ребенка создавать игры, сайты и приложения с нуля
      </Heading>
    </>
  );
}
