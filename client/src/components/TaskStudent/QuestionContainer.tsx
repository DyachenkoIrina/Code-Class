import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue
} from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';

export default function QuestionContainer(): JSX.Element {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { id } = useParams();

  const javascriptTasks = tasks.filter((task) => task.topicId === parseInt(id, 10));

  console.log('---javascriptTasks---->', javascriptTasks);

  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900'],
  );

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Card align="center">
      <CardHeader>
        <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
          <TabList>
            <Tab>Red</Tab>
            <Tab>Teal</Tab>
            <Tab>Blue</Tab>
          </TabList>
          <TabPanels p="2rem">
            <TabPanel>{javascriptTasks[0]?.questions}</TabPanel>
            <TabPanel>{javascriptTasks[1]?.questions}</TabPanel>
            <TabPanel>{javascriptTasks[2]?.questions}</TabPanel>
          </TabPanels>
        </Tabs>
      </CardHeader>
      <CardBody>
        <Text fontSize="4xl">{javascriptTasks[0]?.questions}</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">View here</Button>
      </CardFooter>
    </Card>
  );
}
