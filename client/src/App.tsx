import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { SaasProvider } from '@saas-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import Footer from './components/Footer';
import YandexMap from './components/YandexMap';
import { thunkGroupsLoad } from './redux/slices/groups/thunkActions';
import { useAppDispatch } from './redux/hook';
import StudentAccountPage from './pages/StudentAccountPage'
import thunkLoad from './redux/topics/createAsyncThunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    void dispatch(thunkLoad());
  }, []);

  return (
    <ChakraProvider>
      {/* <SaasProvider>
        <SideBar />
      </SaasProvider> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginFormModal />} />
        <Route path="/teacherlk" element={<TeacherAccountPage />} />
        <Route path="/studentlk" element={<StudentAccountPage />} />
      </Routes>
      {/* <YandexMap /> */}
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
