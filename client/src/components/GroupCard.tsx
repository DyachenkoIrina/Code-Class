import React from 'react';
import { Button, Card, CardBody, useDisclosure } from '@chakra-ui/react';
import type { GroupType } from '../types/groups';
import { useAppDispatch } from '../redux/hook';
import { groupModal } from '../redux/slices/modal/modalReducer';
import StudentFormModal from '../forms/StudentsFormModal';
import { thunkFilterStudentsLoad } from '../redux/slices/students/thunkActions';

type GroupTypeProps = {
  group: GroupType;
};

function GroupCard({ group }: GroupTypeProps): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    dispatch(groupModal());
    void dispatch(thunkFilterStudentsLoad(group.groupId));
    onOpen();
  };
  console.log('11111111', group);
  return (
    <>
      <Card sx={{ height: '70px', maxWidth: 340, marginBottom: '10px' }}>
        <CardBody
          w="100%"
          h="200px"
          bgGradient="linear(to-r, #C1FFBC, #D9D0FF, #D7E8D7)"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Button
            sx={{ height: '50px', width: 300, display: 'flex', justifyContent: 'center' }}
            onClick={handleOpenModal}
          >
            {group.Group.group}
          </Button>
        </CardBody>
      </Card>
      <StudentFormModal />
    </>
  );
}

export default React.memo(GroupCard);
