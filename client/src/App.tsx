import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from './redux/hook';
import NavBar from './components/NavBar';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

import MainPage from './pages/MainPage';
import { apiNotesService } from './services/notes';
import Loader from './components/Loader';
import { thunkNotesLoad } from './redux/slices/notes/createAsyncThunk';
import Favourites from './pages/FavouritesPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((store) => store.auth);

  useEffect(() => {
    void dispatch(thunkNotesLoad());
  }, []);

  useEffect(() => {
    const requestInterceptor = apiNotesService.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (err) => Promise.reject(err),
    );

    const responseInterceptor = apiNotesService.interceptors.response.use(
      (res) => res,
      async (err: AxiosError & { config: { sent?: boolean } }) => {
        const prevRequest = err.config;
        if (err.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await dispatch(refreshThunk());
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiNotesService(prevRequest);
        }
        return Promise.reject(err);
      },
    );

    return () => {
      apiNotesService.interceptors.request.eject(requestInterceptor);
      apiNotesService.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken]);

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
