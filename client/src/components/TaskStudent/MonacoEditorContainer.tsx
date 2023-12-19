import React, { useState } from 'react';
import { Button, Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Editor from 'react-monaco-editor';
import { useAppSelector } from '../../redux/hook';
import type { TasksState } from '../../types/task';

const theme = extendTheme({
  styles: {
    global: {
      '.editor-container': {
        width: '100%', // Например, 100% ширины родительского контейнера
        height: '400px',
        selectOnLineNumbers: true,
        theme: 'vs-dark', // Установка темы с черным фоном
        automaticLayout: true,
        textAlign: 'left',
      },
    },
  },
});


export default function MonacoEditorContainer({tasks}: TasksState): JSX.Element {
  const userState = useAppSelector((state) => state.authSlice.user);
  const [editorValue, setEditorValue] = useState('');
  console.log('user', userState);

  const saveTextToDatabase = async (): Promise<void> => {
    try {
      await fetch('http://localhost:3001/api/v1/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: userState,
          studentWork: editorValue,
          task: tasks
        }),
      });
    } catch (error) {
      console.error('Произошла ошибка при отправке текста на сервер:', error);
    }
  };

  const editorOptions = {
    selectOnLineNumbers: true,
    theme: 'vs-dark', // Установка темы с черным фоном
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
        <Button onClick={saveTextToDatabase}>Сохранить в базу данных</Button>
      </div>
    </ChakraProvider>
  );
}
