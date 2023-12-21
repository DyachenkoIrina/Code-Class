import React, { useState } from 'react';
import {
  Card,
  CardFooter,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from '@chakra-ui/react';
import type { TasksState } from '../../types/task';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setCurrentTask } from '../../redux/slices/tasks/tasksSlice';

export default function QuestionContainer({ tasks }: TasksState): JSX.Element {
  const dispatch = useAppDispatch();

  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs onChange={(index) => setTabIndex(index)}>
      <Card align="center" position="relative">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList style={{ marginLeft: '270px' }}>
            {tasks.map((task, index) => (
              <Tab key={index} onClick={() => dispatch(setCurrentTask(task.id))}>
                {task?.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels p="2rem" marginTop="50px">
            {tasks.map((task, index) => (
              <TabPanel key={index} fontSize="2xl" fontFamily="monospace">
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
        </Tabs>
        <CardFooter />
      </Card>
    </Tabs>
  );
}
