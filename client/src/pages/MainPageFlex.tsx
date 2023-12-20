import React from 'react';
import { Container, Flex, Box, Image } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
import ModalFromRegistration from '../components/FormFromRegistration';
import YandexMap from '../components/YandexMap';
import CourseOptions from '../components/CourseOptions';
import CarouselImg from '../components/Carousel';
// import { toggleModal } from '../redux/slices/modal/modalReducer';
import HeadingComponent from '../components/Heading';
import Video from '../components/Video';

import '../index.css';

export default function MainPageFlex(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const modalState = useAppSelector((state) => state.modal.registrModal);

  // const handleToggleModal = (): void => {
  //   dispatch(toggleModal());
  // };

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
          <Container className="heading_wrapper">
            <Container className="heading">
              <HeadingComponent  />
              <ModalFromRegistration
                
                // isOpen={modalState}
                // onClose={handleToggleModal}
              />
            </Container>
            <CarouselImg />
          </Container>
          <Container className="corses_text">Курсы для детей всех возрастов и интересов</Container>
          <CourseOptions />
          <YandexMap />
        </Container>
      </Box>
    </Flex>
  );
}
