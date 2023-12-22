import React, { useEffect } from 'react';
import {  Grid, GridItem } from '@chakra-ui/layout';
import { Container } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import TopicCardSt from './TopicCardSt';
import { thunkCheckTask } from '../redux/slices/teacher/thunkActions';


export default function CheckTopicContainerSt(): JSX.Element {
  const dispatch = useAppDispatch();
  const tasks =useAppSelector((state)=>state.teacherSlice.taskss)
  const userId = useAppSelector((state) => state.authSlice.user);
  console.log('topi');
  
  useEffect(() => {
    if(userId)
    void dispatch(thunkCheckTask(userId?.id));
  }, [userId]);

  return (
    <Container
    style={{
     //backgroundColor: '#D7E8D7',
      //  border: '2px solid gray',
      borderRadius: '25px',
      padding: '4px',
      overflowY: 'auto',
      maxHeight: '700px',
    }}
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
        {tasks.map((tasks) => (
          <GridItem key={tasks.id} minWidth="0" overflow="visible">
            <TopicCardSt topic={tasks} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}