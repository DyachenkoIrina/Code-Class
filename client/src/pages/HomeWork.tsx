import React, { useState } from 'react';
import { Button, Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Editor from 'react-monaco-editor';
import { useAppSelector } from '../redux/hook';

export default function HomeWork(): JSX.Element {
  const homeWork = useAppSelector((state) => state.homeWorksSlice.homeWork);

  console.log('----homeWork---->', homeWork[0].checkWork);

  const [value, setValue] = useState(homeWork[0].checkWork);



  // useEffect(() => {
  //   setValue(homeWork);
  // }, [homeWork]);

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
            // defaultValue={value}
            value={value}
            onChange={(value) => setValue(value)}
            options={editorOptions}
          />
        </Box>
        <Button>Отправить на проверку</Button>
      </div>
    </ChakraProvider>
  );
}
