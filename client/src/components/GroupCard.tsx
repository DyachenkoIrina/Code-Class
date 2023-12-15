import React from 'react';
import { Button, Card, CardBody, useDisclosure } from '@chakra-ui/react';
import type { GroupType } from '../types/groups';
import { useAppDispatch } from '../redux/hook';

import StudentFormModal from '../forms/StudentsFormModal';
import { thunkFilterStudentsLoad } from '../redux/slices/students/thunkActions';
import { openModal1 } from '../redux/slices/modal/modalReducer';

type GroupTypeProps = {
  group: GroupType;
};

function GroupCard({ group }: GroupTypeProps): JSX.Element {
  const { onOpen } = useDisclosure();
  const dispatch = useAppDispatch();

  const handleOpenModal = (): void => {
    dispatch(openModal1());
    void dispatch(thunkFilterStudentsLoad(group.id));

    onOpen();
  };
  return (

    <>
      <Card sx={{ height: '70px', maxWidth: 340, marginBottom: '10px' }}>
        <CardBody w='100%' h='200px' bgGradient='linear(to-r, green.200, pink.500)' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <Text fontSize="2xl">{group.group}</Text> */}
          <Button  sx={{height: '50px', width:300, display: 'flex', justifyContent:'center'}} onClick={handleOpenModal}>
            {group.group}
          </Button>
        </CardBody>
      </Card>
      <StudentFormModal />
    </>

  );
}

export default React.memo(GroupCard);
