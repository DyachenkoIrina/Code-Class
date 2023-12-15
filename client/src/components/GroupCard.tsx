import React from 'react';
import { Button, Card, CardBody, useDisclosure } from '@chakra-ui/react';
import type { GroupType } from '../types/groups';
import { useAppDispatch } from '../redux/hook';
import { openModal } from '../redux/slices/modal/modalReducer';
import StudentFormModal from '../forms/StudentsFormModal';
import { thunkFilterStudentsLoad } from '../redux/slices/students/thunkActions';

type GroupTypeProps = {
  group: GroupType;
};

function GroupCard({ group }: GroupTypeProps): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    dispatch(openModal());
    void dispatch(thunkFilterStudentsLoad(group.id));

    onOpen();
  };
  return (

    <>
      <Card sx={{ height: '70px', maxWidth: 380, marginBottom: '10px' }}>
        <CardBody sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Text fontSize="2xl">{group.group}</Text> */}
          <Button onClick={handleOpenModal}>
            {/* <Button flex='1' variant='ghost' leftIcon={< />}> можно добаыить иконку */}
            {group.group}
          </Button>
        </CardBody>
      </Card>
      <StudentFormModal />
    </>

  );
}

export default React.memo(GroupCard);
