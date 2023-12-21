import React, { useState } from 'react';
import {
  Box,
  Container,
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
  extendTheme,
  ChakraProvider,
} from '@chakra-ui/react';

import Editor from 'react-monaco-editor';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setCurrentTask } from '../redux/slices/tasks/tasksSlice';

const theme = extendTheme({
  styles: {
    global: {
      '.editor-container': {
        width: '100%',
        height: '400px',
        selectOnLineNumbers: true,
        theme: 'vs-dark',
        automaticLayout: true,
        textAlign: 'left',
      },
    },
  },
});

export default function HomeWork(): JSX.Element {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const homeWork = useAppSelector((state) => state.homeWorksSlice.homeWork);
 

  const id = 2;
  const currentHomeWork = homeWork.filter((task) => task.id === parseInt(id, 10));


  const dispatch = useAppDispatch();
  const [tabIndex, setTabIndex] = useState(0);

  const editorOptions = {
    selectOnLineNumbers: true,
    theme: 'vs-dark',
    automaticLayout: true,
  };

  return (
    <Box>
      <Box>
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
      </Box>

      <ChakraProvider theme={theme}>
        <div>
          <Box className="editor-container">
            <Editor
              language="javascript"
              value={currentHomeWork[0]?.checkWork}
              onChange={(value) => setEditorValue(value)}
              options={editorOptions}
            />
          </Box>
          <Button
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="green.500"
            marginTop="30px"
            // onClick={saveTextToDatabase}
          >
            Отправить на проверку
          </Button>
        </div>
      </ChakraProvider>
    </Box>
  );
}
