import React from 'react';
import { Button, Card, CardBody, useDisclosure } from '@chakra-ui/react';
import type { GroupType } from '../types/groups';
import { useAppDispatch } from '../redux/hook';
import { groupModal} from '../redux/slices/modal/modalReducer';
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
    void dispatch(thunkFilterStudentsLoad(group.id));
    onOpen();
  };
  return (

    <>
      <Card sx={{ height: '70px', maxWidth: 340, marginBottom: '10px' }}>
        <CardBody w='100%' h='200px' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
