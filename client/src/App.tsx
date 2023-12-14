import React from 'react';
import { Container, ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Container>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Container>
    </ChakraProvider>
  );
}

export default App;
