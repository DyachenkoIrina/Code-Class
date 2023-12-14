import { Grid } from '@chakra-ui/react';
import React from 'react';
import GroupCard from '../components/GroupCard';
import { useAppSelector } from '../redux/hook';

export default function TeacherAccountList(): JSX.Element {
  const groups1 = useAppSelector((state) => state.groupsSlice.groups);
  return (
    <Grid sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' , flexDirection: 'column' }}>
      {groups1.map((group) => (
        <Grid key={group.id}>
          <GroupCard group={group} />
        </Grid>
      ))}
    </Grid>
  );
}
