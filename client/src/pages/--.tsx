// import React from 'react';
// import { Container, Image } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import ModalFromRegistration from '../components/FormFromRegistration';
// import YandexMap from '../components/YandexMap';
// import CourseOptions from '../components/CourseOptions';
// import CarouselImg from '../components/Carousel';
// import { toggleModal } from '../redux/slices/modal/modalReducer';
// import HeadingComponent from '../components/Heading';
// import Video from '../components/Video';

// import '../index.css';

// export default function MainPage(): JSX.Element {
//   const dispatch = useAppDispatch();
//   const modalState = useAppSelector((state) => state.modal.registrModal);

//   const handleToggleModal = (): void => {
//     dispatch(toggleModal());
//   };

//   return (
//     <Container>
//       <Video />
//       <Container class="heading_wrapper">
//         <Container class="heading">
//           <HeadingComponent class="heading_text" />
//           <ModalFromRegistration
//             class="heading_btn"
//             isOpen={modalState}
//             onClose={handleToggleModal}
//           />
//         </Container>
//         <CarouselImg />
//       </Container>
//       <Container class="corses_text">Курсы для детей всех возрастов и интересов</Container>
//       <CourseOptions />
//       <YandexMap />
//     </Container>
//   );
// }