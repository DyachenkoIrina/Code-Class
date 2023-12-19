import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardFooter,
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
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import type { TasksState } from '../../types/task';

export default function QuestionContainer({ tasks }: TasksState): JSX.Element {
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
              {tasks.map((task, index) => (
                <Tab key={index}>{task?.title}</Tab>
              ))}
            </TabList>
          </Box>
        </CardHeader>
        <TabPanels p="2rem" marginTop="50px">
          {tasks.map((task, index) => (
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
