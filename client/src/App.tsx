import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import MainPage from './pages/MainPage';
import TeacherAccountPage from './pages/TeacherAccountPage';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/teacherlk' element={<TeacherAccountPage/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
