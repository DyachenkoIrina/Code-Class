import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, Image } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import { thunkTeacherGroups } from './redux/slices/groups/thunkActions';
import { thunkGroupsLoad, thunkUsersLoad } from './redux/slices/admin/thunkActionsAdmin';
import Footer from './components/Footer';

import { useAppDispatch, useAppSelector } from './redux/hook';

import StudentAccountPage from './pages/StudentAccountPage';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import TaskPage from './pages/TaskPage';
import { thunkLoadTask } from './redux/slices/tasks/createAsyncThunk';
import PrivateRouter from './components/HOC/PrivateRouter';
import AdminPage from './pages/AdminPage';
import HomeWork from './pages/HomeWork';
import { thunkLoadHomeWork } from './redux/slices/homeWork/createAsyncThunk';
import './index.css';
import MainPageFlex from './pages/MainPageFlex';
import TeacherAccountPageSt from './pages/TeacherAccountPageSt';
import Loader from './components/HOC/Loader';
import { thunkLoad } from './redux/slices/topics/createAsyncThunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((store) => store.authSlice.user.id);

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkLoadHomeWork());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
    // void dispatch(thunkUsersLoad());
    void dispatch(thunkTeacherGroups());
  }, []);



  const user = useAppSelector((store) => store.authSlice.user);
  const teacher = useAppSelector((store) => store.authSlice.teacher);
  const topics = useAppSelector((state) => state.topics.topics);


  const stor = useAppSelector((store) => console.log('--->store--->', store));
  return (
    <>
      <SaasProvider>
        <SideBar />
      </SaasProvider>
      <Loader isLoading={user.status === 'pending'}>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<MainPageFlex />} />
          <Route
            element={
              <PrivateRouter
                isAllowed={user?.status === 'authenticated' && user?.role === 'Teacher'}
              />
            }
          >
            <Route path="/teacherlk" element={<TeacherAccountPage />} />
            <Route path="/teacherlk/:id" element={<TeacherAccountPage />} />
            <Route path="/teacherlk/studentid/:id" element={<TeacherAccountPageSt />} />
          </Route>
          <Route
            element={
              <PrivateRouter
                isAllowed={user?.status === 'authenticated' && user?.role === 'Student'}
              />
            }
          >
            <Route path={`/studentlk/${userId}`} element={<StudentAccountPage />} />
            <Route path="/student/task/:id" element={<TaskPage />} />
            <Route path="/homework" element={<HomeWork />} />
          </Route>
          <Route
            element={
              <PrivateRouter
                isAllowed={user?.status === 'authenticated' && user?.role === 'Admin'}
              />
            }
          >
            <Route path="/adminlk" element={<AdminPage />} />
          </Route>
        </Routes>

        <Footer />
        <LoginFormModal />
      </ChakraProvider>
      </Loader>
    </>
  );
}

export default App;
