import React from 'react';
import { Container } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import ModalFromRegistration from '../components/FormFromRegistration';
import { toggleModal } from '../redux/slices/modal/modalReducer';
import YandexMap from "../components/YandexMap";

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const modalState = useAppSelector((state) => state.modal);

  const handleToggleModal = (): void => {
    dispatch(toggleModal());
  };
  

  return (
    <>
    <Container sx={{ margin: 'auto' }}>

      <ModalFromRegistration isOpen={modalState.isOpen} onClose={handleToggleModal} />
    </Container>
    <YandexMap />
    </>
  );

}
