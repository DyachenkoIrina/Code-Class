import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import { thunkGroupsLoad } from './redux/slices/groups/thunkActions';
import Footer from './components/Footer';
import YandexMap from './components/YandexMap';
import { useAppDispatch, useAppSelector } from './redux/hook';
import thunkLoad from './redux/slices/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import TaskPage from './pages/TaskPage';
import { thunkLoadTask } from './redux/slices/tasks/createAsyncThunk';
import PrivateRouter from './components/HOC/PrivateRouter';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
  }, []);

  const theme = extendTheme({
    colors: {
      brand: {
        100: 'black',
        900: '#1a202c',
      },
    },
  });

  const user = useAppSelector((store) => store.authSlice.user);
  console.log('applog------', user);

  return (
    <Container>
      <ChakraProvider theme={theme}>
        <SaasProvider>
          <SideBar />
        </SaasProvider>
        <Container style={{ margin: '0 auto', padding: '15px' }} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route element={<PrivateRouter isAllowed={user.status !== 'authenticated'} />}>
            <Route path="/teacherlk" element={<TeacherAccountPage />} />
            <Route path="/studentlk" element={<StudentAccountPage />} />
            <Route path="/student/task/:id" element={<TaskPage />} />
            <Route path="/student/adminlk" element={<TaskPage />} />
          </Route>
        </Routes>
        {/* <YandexMap /> */}
        {/* <Footer /> */}
        <LoginFormModal />
      </ChakraProvider>
    </Container>
  );
}

