import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import {  thunkGroupsLoad, thunkTeacherGroups } from './redux/slices/groups/thunkActions';
import Footer from './components/Footer';
import YandexMap from './components/YandexMap';
import { useAppDispatch, useAppSelector } from './redux/hook';
import thunkLoad from './redux/slices/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';
import { thunkCheckAuth, thunkRefreshToken } from './redux/slices/auth/createAsyncThunks';
import TaskPage from './pages/TaskPage';
import { thunkLoadTask } from './redux/slices/tasks/createAsyncThunk';
import PrivateRouter from './components/HOC/PrivateRouter';
import { thunkUsersLoad } from './redux/slices/admin/thunkActionsAdmin';
import AdminPage from './pages/AdminPage';
import { thunkTeacherGroupLoad } from './redux/slices/teacher/thunkActions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {

    void dispatch(thunkGroupsLoad());
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
    void dispatch(thunkUsersLoad());
    void dispatch(thunkTeacherGroups());
  }, []);

  const teachers = useAppSelector((state) => state.groupsSlice.teacherGroups)
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++", teachers)

  const theme = extendTheme({
    colors: {
      brand: {
        100: 'black',
        900: '#1a202c',
      },
    },
  });

  const user = useAppSelector((store) => store.authSlice.user);


console.log('>>>>App>>>>>>user', user)
return (
  <Container>
    <ChakraProvider theme={theme}>
      <SaasProvider>
        <SideBar />

        <Routes>
          <Route path="/" element={<MainPage />} />

         
          {/* <Route
>>>>>>> 5e4521bc42622fb920a320009d008dbc75422763
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role === 'Teacher'}
              />
            }
          >
            <Route path="/teacherlk/:id" element={<TeacherAccountPage />} />
          </Route>

=======
          */}
<Route path="/teacherlk/:id" element={<TeacherAccountPage />} />


          <Route
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role === 'Student'}
              />
            }
          >
            <Route path="/studentlk" element={<StudentAccountPage />} />
          </Route>
          
          <Route path="/student/task/:id" element={<TaskPage />} />

          <Route
            element={
              <PrivateRouter
                isAllowed={user.status === 'authenticated' && user?.role === 'Admin'}
              />
            }
          >
            <Route path="/adminlk" element={<AdminPage />} />
          </Route>
        </Routes>

        <Footer />
        <LoginFormModal />
      </SaasProvider>
    </ChakraProvider>
  </Container>
);
}

export default App;

