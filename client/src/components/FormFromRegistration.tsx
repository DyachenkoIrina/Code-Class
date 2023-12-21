// import React, { useState } from 'react';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
// } from '@chakra-ui/react';
// import { useAppDispatch, useAppSelector } from '../redux/hook';
// import { registrModal } from '../redux/slices/modal/modalReducer';
// import { thunkSignup, thunkConfirm } from '../redux/slices/auth/createAsyncThunks';
// import type { SignupFormData } from '../types/auth';

// export default function ModalFromRegistration(): JSX.Element {
//   const [show, setShow] = useState(false);

//   const { onOpen, onClose } = useDisclosure();
//   const dispatch = useAppDispatch();
//   const isOpen = useAppSelector((state) => state.modal.registrModal);

//   const initialRef = React.useRef(null);
//   const finalRef = React.useRef(null);

//   const handleOpenModal = (): void => {
//     dispatch(registrModal());
//     onOpen();
//   };

//   return (
//     <>
//       <Button
//         fontWeight="400"
//         boxShadow="dark-lg"
//         p="6"
//         rounded="md"
//         bg="#D7E8D7"
//         _hover={{ background: '#D9D0FF' }}
//         onClick={handleOpenModal}
//         size="md"
//         height="60px"
//         width="280px"
//         border="none"
//         marginTop="20px"
//       >
//         Записаться на пробное занятие
//       </Button>

//       <Modal
//         initialFocusRef={initialRef}
//         finalFocusRef={finalRef}
//         isOpen={isOpen}
//         onClose={() => {
//           dispatch(registrModal());
//           setShow(false);
//           onClose();
//         }}
//       >
//         <ModalOverlay />
//         <ModalContent className="login_modal">
//           <ModalHeader className="login_modal_header">
//             Пожалуйста, <br /> зарегистрируйтесь
//           </ModalHeader>
//           <ModalBody pb={6}>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 const formData = Object.fromEntries(
//                   new FormData(e.currentTarget),
//                 ) as SignupFormData;
//                 void dispatch(thunkConfirm(formData));
//                 setShow(true);
//               }}
//             >
//               <FormControl>
//                 <FormLabel>Имя</FormLabel>
//                 <Input
//                   className="login_input"
//                   name="name"
//                   type="text"
//                   ref={initialRef}
//                   placeholder="Имя"
//                 />
//               </FormControl>

//               <FormControl mt={4}>
//                 <FormLabel>Почта</FormLabel>
//                 <Input className="login_input" name="email" type="email" placeholder="Почта" />
//               </FormControl>

//               <FormControl mt={4}>
//                 <FormLabel>Пароль</FormLabel>
//                 <Input
//                   className="login_input"
//                   name="password"
//                   type="password"
//                   placeholder="Пароль"
//                 />
//               </FormControl>

//               <Button type="submit" class="login_closebtn">
//                 Подтвердить почту
//               </Button>
//             </form>

//             {show && (
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const formData = Object.fromEntries(
//                     new FormData(e.currentTarget),
//                   ) as SignupFormData;
//                   void dispatch(thunkSignup(formData));
//                   setShow(false); // Закрываем модальное окно после регистрации
//                 }}
//               >
//                 <FormControl mt={4}>
//                   <FormLabel>Почта2</FormLabel>
//                   <Input
//                     isInvalid
//                     errorBorderColor="red.300"
//                     class="login_input"
//                     name="confirmCode"
//                     type="password"
//                     placeholder="Почта2"
//                   />
//                 </FormControl>
//                 <Button
//                   onClose={() => {
//                     dispatch(registrModal());
//                     setShow(false);
//                     onClose();
//                   }}
//                   class="login_btn"
//                   colorScheme="blue"
//                   type="submit"
//                   mr={3}
//                 >
//                   Зарегистрироваться
//                 </Button>
//               </form>
//             )}
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { registrModal } from '../redux/slices/modal/modalReducer';
import { thunkSignup, thunkConfirm } from '../redux/slices/auth/createAsyncThunks';
import type { SignupFormData } from '../types/auth';

function RegistrationForm({
  onSubmit,
  isConfirmationStep,
}: {
  onSubmit: (data: SignupFormData) => void;
  isConfirmationStep: boolean;
}) {
  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>Имя</FormLabel>
        <Input class="login_input" name="name" type="text" placeholder="Имя" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Почта</FormLabel>
        <Input class="login_input" name="email" type="email" placeholder="Почта" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Пароль</FormLabel>
        <Input class="login_input" name="password" type="password" placeholder="Пароль" />
      </FormControl>

      {isConfirmationStep && (
        <FormControl mt={4}>
          <FormLabel>Почта2</FormLabel>
          <Input
            isInvalid
            errorBorderColor="red.300"
            class="login_input"
            name="confirmCode"
            type="password"
            placeholder="Почта2"
          />
        </FormControl>
      )}

      <Button class="login_btn"  colorScheme="blue" type="submit" mr={3}>
        {isConfirmationStep ? 'Зарегистрироваться' : 'Подтвердить почту'}
      </Button>
    </form>
  );
}

function ModalFromRegistration(): JSX.Element {
  const [step, setStep] = useState(1); // 1 - регистрация, 2 - подтверждение

  const { onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.registrModal);

  const handleOpenModal = (): void => {
    dispatch(registrModal());
    onOpen();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignupFormData;

    if (step === 1) {
      void dispatch(thunkConfirm(formData));
      setStep(2);
    } else {
      await dispatch(thunkSignup(formData));
      onClose()
    }
  };

  return (
    <>
      <Button
        fontWeight="400"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="#D7E8D7"
        _hover={{ background: '#D9D0FF' }}
        onClick={handleOpenModal}
        size="md"
        height="60px"
        width="280px"
        border="none"
        marginTop="20px"
      >
        Записаться на пробное занятие
      </Button>

      <Modal
        initialFocusRef={null}
        finalFocusRef={null}
        isOpen={isOpen}
        onClick={() => dispatch(registrModal())}
      >
        <ModalOverlay />
        <ModalContent class="login_modal">
          <ModalHeader class="login_modal_header">
            Пожалуйста, <br /> {step === 1 ? 'зарегистрируйтесь' : 'подтвердите почту'}
          </ModalHeader>
          <ModalCloseButton onClick={() => dispatch(registrModal())} />
          <ModalBody pb={6}>
            <RegistrationForm onSubmit={handleSubmit} isConfirmationStep={step === 2} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalFromRegistration;
