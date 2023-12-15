import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react';
import {useAppSelector} from '../../redux/hook';

export default function QuestionContainer(): JSX.Element {
  const tasks = useAppSelector((state) => state.tasks.tasks);


  const javascriptTasks = tasks.filter(obj => obj.title === 'JavaScript Task');
  // console.log('javascriptTasks------->', javascriptTasks);
  
  return (
    <Card align="center">
      <CardHeader>
        <Heading size="md"> Customer dashboard</Heading>
      </CardHeader>
      <CardBody>
        <Text fontSize="50px" color="tomato">
          {javascriptTasks[0].questions}
        </Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  );
}
