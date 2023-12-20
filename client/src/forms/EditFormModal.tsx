import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { userEditModal } from '../redux/slices/modal/modalReducer';
import { thunkUpdateUser } from '../redux/slices/auth/createAsyncThunks';

export default function EditFormModal({ show, setShow }: { show: any; setShow: any }): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice.user);
  

  return (
    <Modal onClose={() => dispatch(userEditModal())} isOpen={show}>
      <ModalOverlay />
      <ModalContent class="login_modal">
        <ModalHeader class="login_modal_header">Редактировать профиль</ModalHeader>
        <ModalBody pb={6}>
          <form
            onSubmit={(e) => {
              console.log(e.currentTarget.profileImage.files[0], 'oaoaooaao');
              
              e.preventDefault();
              const formData = new FormData();
              formData.append('id', user.id);
              formData.append('lastName', e.currentTarget.lastName.value);
              formData.append('name', e.currentTarget.name.value);
              formData.append('profileImage', e.currentTarget.profileImage.files[0]);
              formData.append('email', e.currentTarget.email.value);
              // formData.append('role', e.currentTarget.role.value);

              // dispatch(thunkUpdateUser({ id: user.id, data: formData }));
              dispatch(thunkUpdateUser(formData));
              setShow(false);
            }}
          >
            <FormControl>
              <FormLabel>Фамилия</FormLabel>
              <Input
                class="login_input"
                defaultValue={user.lastName}
                name="lastName"
                type="text"
                placeholder="Фамилия"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Имя</FormLabel>
              <Input
                class="login_input"
                defaultValue={user.name}
                name="name"
                type="text"
                placeholder="Имя"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Почта</FormLabel>
              <Input
                class="login_input"
                defaultValue={user.email}
                name="email"
                type="text"
                placeholder="Почта"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Фото</FormLabel>
              <Input name="profileImage" type="file" placeholder="Фото" />
            </FormControl>

            {/* <FormControl mt={4}>
              <FormLabel>Роль</FormLabel>
              <Input class="login_input"  defaultValue={user.role} name="role" type="text" placeholder="Роль" />
            </FormControl> */}

            <Button class="edit_profile_btn" type="submit" colorScheme="blue" mr={3}>
              Применить
            </Button>
            <Button class="edit_profile_closebtn" onClick={() => setShow(false)}>
              Cancel
            </Button>
          </form>
        </ModalBody>

        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
