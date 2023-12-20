import React from 'react';
import { Button, Card, CardBody, useDisclosure } from '@chakra-ui/react';
import type { GroupCardType } from '../types/groups';
import { useAppDispatch } from '../redux/hook';
import { groupModal } from '../redux/slices/modal/modalReducer';
import StudentFormModal from '../forms/StudentsFormModal';
import { thunkFilterStudentsLoad } from '../redux/slices/students/thunkActions';

type GroupTypeProps = {
  group: GroupCardType;
};

function GroupCard({ group }: GroupTypeProps): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();
  //console.log('=========================================================================================================',group)

  const handleOpenModal = (): void => {
    dispatch(groupModal());
    void dispatch(thunkFilterStudentsLoad(group.groupId));
    onOpen();
  };
  return (
    <>
      <Card sx={{ height: '70px', maxWidth: 340, marginBottom: '10px', borderRadius: '20px' }}>
        <CardBody
          w="100%"
          h="200px"
          bg="#D9D0FF"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            sx={{ height: '50px', width: 300, display: 'flex', justifyContent: 'center' }}
            onClick={handleOpenModal}
          >
            {group.Group?.group}
          </Button>
        </CardBody>
      </Card>
      <StudentFormModal />
    </>
  );
}

export default React.memo(GroupCard);
