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
import { thunkGroupsLoad } from './redux/slices/groups/thunkActions';
import { useAppDispatch } from './redux/hook';
import thunkLoad from './redux/slices/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';
import CarouselImg from './components/Carousel';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import thunkLoadTask from './redux/slices/tasks/createAsyncThunk';
import TaskPage from './pages/TaskPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
  }, []);

  return (
    <Container>
      <ChakraProvider>
        <SaasProvider>
          <SideBar />
        </SaasProvider>
        <Container style={{ margin: '0 auto', padding: '15px' }} />

        {/* <CarouselImg /> */}

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginFormModal />} />
          <Route path="/teacherlk" element={<TeacherAccountPage />} />
          <Route path="/studentlk" element={<StudentAccountPage />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
        {/* <YandexMap /> */}
        {/* <Footer /> */}
      </ChakraProvider>
    </Container>
  );
}

export default App;
