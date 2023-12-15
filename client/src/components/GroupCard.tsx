import React from 'react';
import { Button, Card, CardBody, Text } from '@chakra-ui/react';
import type { GroupType } from '../types/groups';

type GroupTypeProps = {
  group: GroupType;
};

function GroupCard({ group }: GroupTypeProps): JSX.Element {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardBody sx={{  display: 'flex', justifyContent: 'space-between'  }}>
        <Text fontSize='2xl'>
          {group.group}
        </Text>
        <Button>
          Зайти
        </Button>
      </CardBody>
    </Card>
  );
}

export default React.memo(GroupCard);
