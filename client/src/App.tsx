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
import thunkLoad from './redux/slices/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import TaskPage from './pages/TaskPage';
import { thunkLoadTask } from './redux/slices/tasks/createAsyncThunk';
import PrivateRouter from './components/HOC/PrivateRouter';
import AdminPage from './pages/AdminPage';

import { thunkLoadHomeWork } from './redux/slices/homeWork/createAsyncThunk';
import { thunkTeacherGroupLoad } from './redux/slices/teacher/thunkActions';
import './index.css';
import TeacherAccountFormSt from './forms/TeacherAccountFormSt';
import HomeWork from './pages/HomeWork';

import MainPageFlex from './pages/MainPageFlex';
import TeacherAccountPageSt from './pages/TeacherAccountPageSt';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkLoadHomeWork());

    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
    void dispatch(thunkUsersLoad());
    void dispatch(thunkTeacherGroups());
  }, []);

  const user = useAppSelector((store) => store.authSlice.user);
  const teacher = useAppSelector((store) => store.authSlice.teacher);

  return (
    <>
      <SaasProvider>
        
          <SideBar />
       
      </SaasProvider>

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
            <Route path="/teacherlk/studentid/:id" element={<TeacherAccountPageSt />} />
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
          <Route path="/homework" element={<HomeWork />} />
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
