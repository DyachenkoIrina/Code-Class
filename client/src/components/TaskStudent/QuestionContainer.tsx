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
  useColorModeValue,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hook';

export default function QuestionContainer(): JSX.Element {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const { id } = useParams();

  const javascriptTasks = tasks.filter((task) => task.topicId === parseInt(id, 10));



  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900'],
  );

  const [tabIndex, setTabIndex] = useState(0);
  const bg = colors[tabIndex];

  return (
    <Tabs onChange={(index) => setTabIndex(index)}>
      <Card align="center" position="relative">
        <CardHeader>
          <Box
            position="sticky"
            top="50px" // Здесь устанавливаем высоту для TabList, чтобы она оставалась под фиксированной навигацией
            left="0"
            width="100%"
            p="2"
            bg={bg}
            zIndex="1"
            overflow="hidden"
          >
            <TabList>
              {javascriptTasks.map((task, index) => (
                <Tab key={index}>{task?.title}</Tab>
              ))}
            </TabList>
          </Box>
        </CardHeader>
        <TabPanels p="2rem" marginTop="50px">
          {javascriptTasks.map((task, index) => (
            <TabPanel key={index} fontSize="3xl" fontFamily="monospace">
              {task?.questions}
              <Popover isLazy>
                <PopoverTrigger>
                  <Button>Посмотреть подсказку</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader fontWeight="semibold">
                    Постарайся решать задачи без подсказок{' '}
                  </PopoverHeader>
                  <PopoverArrow />
                  <PopoverCloseButton />

                  <PopoverBody>{task?.answer}</PopoverBody>
                </PopoverContent>
              </Popover>
            </TabPanel>
          ))}
        </TabPanels>
        <CardFooter />
      </Card>
    </Tabs>
  );
}
