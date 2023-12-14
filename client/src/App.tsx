import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginFormModal from './forms/LoginFormModal';
import MainPage from './pages/MainPage';
import SideBar from './components/SideBar';
import TeacherAccountPage from './pages/TeacherAccountPage';
import { thunkGroupsLoad } from './redux/slices/groups/thunkActions';
import { useAppDispatch } from './redux/hook';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
  }, []);

  return (
    <ChakraProvider>
      <SideBar />
      <div>123456789</div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginFormModal />} />
        <Route path="/teacherlk" element={<TeacherAccountPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
