import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ModalFromRegistration from '../components/FormFromRegistration';
import YandexMap from '../components/YandexMap';
import CourseOptions from '../components/CourseOptions';
import CarouselImg from '../components/Carousel';
import { toggleModal } from '../redux/slices/modal/modalReducer';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal.registrModal);

  const handleToggleModal = (): void => {
    dispatch(toggleModal());
  };

  return (
    <>
      <CarouselImg />
      <Container sx={{ margin: 'auto' }}>
        <ModalFromRegistration isOpen={modalState} onClose={handleToggleModal} />
      </Container>
      <CourseOptions />
      <YandexMap />
    </>
  );
}
