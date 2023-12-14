import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from './redux/hook';
import NavBar from './components/NavBar';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
// import NotePage from './pages/ProductPage';
import { checkUserThunk, refreshThunk } from './redux/slices/auth/authThunks';
import MainPage from './pages/MainPage';
import { apiNotesService } from './services/notes';
import Loader from './components/Loader';
import { thunkNotesLoad } from './redux/slices/notes/createAsyncThunk';
import Favourites from './pages/FavouritesPage';

function App(): JSX.Element {
  return (
    <Loader isLoading={auth === 'pending'}>
    <>
      <NavBar />
      <Routes>
        <>
          <Route path="/" element={<MainPage />} />
          <Route
            element={
              <PrivateRouter isAllowed={auth.user.status === 'authenticated'} redirectPath="/" />
            }
          >
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
          </Route>
          <Route
            element={
              <PrivateRouter
                isAllowed={auth.user.status !== 'authenticated'}
                redirectPath="/login"
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/favourites" element={<Favourites />} />
        </>
      </Routes>
    </>
     </Loader>
  );
}

export default App;
