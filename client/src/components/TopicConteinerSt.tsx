import React, { useEffect } from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Container } from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../redux/hook';
import TopicCardSt from './TopicCardSt';
import { thinkShowAllTopic } from '../redux/slices/topics/createAsyncThunk';

export default function TopicContainerSt(): JSX.Element {
  const dispatch = useAppDispatch();
  const topics = useAppSelector((state) => state.topics.topics);

  useEffect(() => {
    if (topics) void dispatch(thinkShowAllTopic());
  }, [topics]);
  return (
    <Container
      style={{
        // backgroundColor: '#D7E8D7',
        //  border: '2px solid gray',
        borderRadius: '25px',
        padding: '4px',
        overflowY: 'auto',
        maxHeight: '700px',
      }}
    >
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
        {topics.map((topic) => (
          <GridItem key={topic.id} minWidth="0" overflow="visible">
            <TopicCardSt topic={topic} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
