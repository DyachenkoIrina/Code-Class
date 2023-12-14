import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from './redux/hook';

import LoginFormModal from './forms/LoginFormModal';

import MainPage from './pages/MainPage';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const auth = useAppSelector((store) => store.auth);

  return (
    <Routes>
      <>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginFormModal />} />
      </>
    </Routes>
  );
}

export default App;
