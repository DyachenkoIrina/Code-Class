import React, { useState } from 'react';
import {Button, Box, extendTheme, ChakraProvider } from '@chakra-ui/react';
import Editor from 'react-monaco-editor';

const theme = extendTheme({
  styles: {
    global: {
      '.editor-container': {
        width: '100%', // Например, 100% ширины родительского контейнера
        height: '500px',
        selectOnLineNumbers: true,
        theme: 'vs-dark', // Установка темы с черным фоном
        automaticLayout: true,
      },
    },
  },
});

export default function MonacoEditorContainer(): JSX.Element {
  const [editorValue, setEditorValue] = useState();
  // console.log(editorValue);

  const saveTextToDatabase = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: editorValue }),
      });

      const data = await response.json();
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
