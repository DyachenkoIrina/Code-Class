import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import Footer from './components/Footer';
import YandexMap from './components/YandexMap';
import YandexMap from './components/YandexMap';
import { thunkGroupsLoad } from './redux/slices/groups/thunkActions';
import { useAppDispatch } from './redux/hook';
import CarouselImg from './components/Carousel';
import { thunkStudentsLoad } from './redux/slices/students/thunkActions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkStudentsLoad())
  }, []);

  return (
    <ChakraProvider>
      {/* <SaasProvider>
        <SideBar />
      </SaasProvider> */}
    <Container style={{ margin: '0 auto', padding: '15px' }}>
      <SideBar />
      <CarouselImg />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginFormModal />} />
        <Route path="/teacherlk" element={<TeacherAccountPage />} />
      </Routes>
      <YandexMap />
      <Footer />
    </ChakraProvider>
    </Container>
  );
}

export default App;
