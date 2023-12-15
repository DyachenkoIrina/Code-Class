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
import { useAppDispatch } from './redux/hook';
import thunkLoad from './redux/topics/createAsyncThunk';
import StudentAccountPage from './pages/StudentAccountPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(thunkGroupsLoad());
    // void dispatch(thunkStudentsLoad())
    void dispatch(thunkLoad());
  }, []);

  const theme = extendTheme({
    colors: {
      brand: {
        100: "black",
        900: "#1a202c",
      },
    },
  })
  


  return (
    <Container>
      <ChakraProvider theme={theme}>
        <SaasProvider>
          <SideBar />
        </SaasProvider>
        <Container style={{ margin: '0 auto', padding: '15px' }} />

       

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/teacherlk" element={<TeacherAccountPage />} />
          <Route path="/studentlk" element={<StudentAccountPage />} />
        </Routes>
        {/* <YandexMap /> */}
        {/* <Footer /> */}
        <LoginFormModal />
      </ChakraProvider>
    </Container>
  );
}

export default App;
