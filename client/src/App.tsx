import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import {  thunkTeacherGroups } from './redux/slices/groups/thunkActions';
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
import './index.css';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
<<<<<<< HEAD

    void dispatch(thunkGroupsLoad());

    

=======
    void dispatch(thunkGroupsLoad());

>>>>>>> 584809426a5a6e3e377d1c64541e7c28519e808a
    void dispatch(thunkCheckAuth());
    void dispatch(thunkRefreshToken());
    void dispatch(thunkLoad());
    void dispatch(thunkLoadTask());
    void dispatch(thunkUsersLoad());
    // void dispatch(thunkTeacherGroups());
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
<<<<<<< HEAD

=======
>>>>>>> 584809426a5a6e3e377d1c64541e7c28519e808a

  return (
    <>
      <SaasProvider>
        <SideBar />
<<<<<<< HEAD

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
=======
>>>>>>> 584809426a5a6e3e377d1c64541e7c28519e808a
      </SaasProvider>
      <ChakraProvider theme={theme}>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
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
        </Container>
      </ChakraProvider>
    </>
  );
}

export default App;

