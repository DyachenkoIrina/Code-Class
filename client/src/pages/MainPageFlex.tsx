import React from 'react';
import { Container, Flex, Box, Image } from '@chakra-ui/react';
import ModalFromRegistration from '../components/FormFromRegistration';
import YandexMap from '../components/YandexMap';
import CourseOptions from '../components/CourseOptions';
import CarouselImg from '../components/Carousel';
import HeadingComponent from '../components/Heading';
import Video from '../components/Video';
import '../index.css';

export default function MainPageFlex(): JSX.Element {


  return (
    <Flex flexDirection="column">
      <Box flex="1">
        <Video />
      </Box>
      <Image className="logo" src="../../public/Logo.png" alt="codeClass logo" />
      <Box flex="1">
        <p className="text">Школа программирования для детей</p>
       
      </Box>
      <Box flex="2">
        <Container>
          <Container class="heading_wrapper">
            <Container class="heading">
              <HeadingComponent class="heading_text" />
              <ModalFromRegistration
              
              />
            </Container>
            <CarouselImg />
          </Container>
          <Container class="corses_text">Курсы для детей всех возрастов и интересов</Container>
          <CourseOptions />
          <YandexMap />
        </Container>
      </Box>
    </Flex>
  );
}
