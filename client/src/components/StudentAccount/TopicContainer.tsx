import React, { useEffect } from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import TopicCard from './TopicCard';
import { thunkOneTopic } from '../../redux/slices/topics/createAsyncThunk';

export default function TopicContainer(): JSX.Element {
  const dispatch = useAppDispatch();
  const topics = useAppSelector((state) => state.topics.topics);
  const userId = useAppSelector((state) => state.authSlice.user);

  useEffect(() => {
    if (userId) void dispatch(thunkOneTopic(userId?.id));
  }, [userId]);
  return (
    <Container
      maxW="900px"
      // bg="#D7E8D7"
      border="2px solid gray"
      borderRadius="25px"
      p={4}
      overflowY="auto" 
      maxH="700px" 
      marginTop="50px"
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
        {topics.map((topic) => (
          <GridItem key={topic.id} minWidth="0" overflow="visible">
            <TopicCard topic={topic} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
