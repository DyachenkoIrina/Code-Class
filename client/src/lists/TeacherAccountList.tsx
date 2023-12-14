import {  Grid } from '@chakra-ui/react';
import React from 'react';
import GroupCard from '../components/GroupCard';


export default function TeacherAccountForm(): JSX.Element {
  const groups = useAppSelector((state) => );
  return (
    <Grid sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
  
      {groups.map((group) => (
        <Grid key={group.id} item xs={4}>
          <GroupCard group={group} />
        </Grid>
      ))}

        
      
    </Grid>
  );
}
