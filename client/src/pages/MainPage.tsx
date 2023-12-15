import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { Container } from '@chakra-ui/react';
import { Box, Tab, Tabs } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ModalFromRegistration from '../components/FormFromRegistration';
import { toggleModal } from '../redux/slices/modal/modalReducer';
import YandexMap from '../components/YandexMap';
import CourseOptions from '../components/CourseOptions';
import CarouselImg from '../components/Carousel';
import LoginFormModal from '../forms/LoginFormModal';



export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal);

  const handleToggleModal = (): void => {
    dispatch(toggleModal());
  };

  return (
    <>
     <CarouselImg />
    <Container sx={{ margin: 'auto' }}>
      <ModalFromRegistration isOpen={modalState.isOpen} onClose={handleToggleModal} />
    </Container>
    <CourseOptions/>
    <YandexMap />
    </>
  );
}
