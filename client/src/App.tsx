import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import Footer from './components/Footer';
import YandexMap from "./components/YandexMap";

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <SideBar />
      <div style={{ width: '100%' }}>
        123456789
      </div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginFormModal />} />
        <Route path="/teacherlk" element={<TeacherAccountPage />} />
      </Routes>
        <YandexMap />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

