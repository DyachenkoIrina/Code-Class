import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';
import TopicCard from './TopicCard';
// import { thunkOneTopic } from '../../redux/slices/topics/createAsyncThunk';

export default function TopicContainer(): JSX.Element {
  // const dispatch = useAppDispatch();
  const topics = useAppSelector((state) => state.topics.topics);
  // const userId = useAppSelector((state) => state.authSlice.user);
  // console.log('$$$$$$$', userId.id);
  
  // useEffect(() => {
  //   if(userId)
  //   void dispatch(thunkOneTopic(userId?.id));
  // }, [userId]);
  return (
    <Container
      maxW="900px"
      // bg="#D7E8D7"
      border="2px solid gray"
      borderRadius="25px"
      p={4}
      overflowY="auto" // Добавляем вертикальную прокрутку
      maxH="700px" // Ограничиваем высоту контейнера
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
