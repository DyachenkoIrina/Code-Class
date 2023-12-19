import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, Image } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import { thunkTeacherGroups } from './redux/slices/groups/thunkActions';
import { thunkUsersLoad } from './redux/slices/admin/thunkActionsAdmin';
import Footer from './components/Footer';

import { useAppDispatch, useAppSelector } from './redux/hook';
import thunkLoad from './redux/slices/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import TaskPage from './pages/TaskPage';
import { thunkLoadTask } from './redux/slices/tasks/createAsyncThunk';
import PrivateRouter from './components/HOC/PrivateRouter';
import AdminPage from './pages/AdminPage';

import './index.css';

import MainPageFlex from './pages/MainPageFlex';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // void dispatch(thunkGroupsLoad());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
    void dispatch(thunkUsersLoad());
    void dispatch(thunkTeacherGroups());
  }, []);

  // const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)

  // console.log('HEHEHEHEHEHEHEHE', groups)
  // const theme = extendTheme({
  //   colors: {
  //     brand: {
  //       100: 'black',
  //       900: '#1a202c',
  //     },
  //   },
  // });

  const user = useAppSelector((store) => store.authSlice.user);
  const teacher = useAppSelector((store) => store.authSlice.teacher);
  console.log('>>>App>>>>>>>teacher', teacher);

  return (
    <>
      <SaasProvider>
        <SideBar />
      </SaasProvider>
      <Container className="logo_wrapper">
        {/* <video className="videoBackgraund" autoPlay loop muted src="/public/video.mp4" /> */}
        <Image className="logo" src="../../public/Logo.png" alt="Dan Abramov" />

        <p className="text">
          Урок длится 60 минут Вы сможете познакомиться с преподавателем и понаблюдать за тем, как
          проходит урок Ребенок познакомится с программированием в среде Scratch и сделает игру
          «Догони робота» или «Фруктовый ниндзя».
        </p>
      </Container>

      <ChakraProvider>
        <Routes>
          <Route path="/" element={<MainPageFlex />} />
          <Route
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role !== 'Teacher'}
              />
            }
          >
            <Route path="/teacherlk/:id" element={<TeacherAccountPage />} />
          </Route>
          <Route
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role !== 'Student'}
              />
            }
          >
            <Route path="/studentlk" element={<StudentAccountPage />} />
          </Route>
          <Route path="/student/task/:id" element={<TaskPage />} />
          <Route
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role !== 'Admin'}
              />
            }
          >
            <Route path="/adminlk" element={<AdminPage />} />
          </Route>
        </Routes>

        <Footer />
        <LoginFormModal />
      </ChakraProvider>
    </>
  );
}

export default App;
