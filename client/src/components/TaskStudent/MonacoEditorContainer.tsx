import React, { useState } from 'react';
import {
  Button,
  Box,
  extendTheme,
  ChakraProvider,
  Stack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import Editor from 'react-monaco-editor';
import { useAppSelector } from '../../redux/hook';
import type { TasksState } from '../../types/task';

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

export default function MonacoEditorContainer({ tasks }: TasksState): JSX.Element {
  const taskId = useAppSelector((state) => state.tasks.currentTask);
  console.log('taskId', taskId);

  const userState = useAppSelector((state) => state.authSlice.user);
  const [editorValue, setEditorValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  console.log('user', userState);

  const saveTextToDatabase = async (): Promise<void> => {
    try {
      await fetch('http://localhost:3001/api/v1/homework', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userState,
          studentWork: editorValue,
          task: taskId,
        }),
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    } catch (error) {
      console.error('Произошла ошибка при отправке текста на сервер:', error);
    }
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    theme: 'vs-dark',
    automaticLayout: true,
  };

  return (
    <ChakraProvider theme={theme}>
      <div>
        <Box className="editor-container">
          <Editor
            language="javascript"
            value={editorValue}
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
          onClick={saveTextToDatabase}
        >
          Отправить на проверку
        </Button>
        {showAlert && (
          <Stack spacing={3} marginTop="20px">
            <Alert status="success" variant="subtle">
              <AlertIcon />
              Задача отправлена на проверку!
            </Alert>
          </Stack>
        )}
      </div>
    </ChakraProvider>
  );
}
