import { Box, Button, FormControl } from '@mui/material';
import React from 'react';
import CustomTextField from './CustomTextField/CustomTextField';
import { useAppDispatch } from '../redux/hook';
import { loginThunk } from '../redux/slices/auth/authThunks';
import type { LoginFormData } from '../types/auth';

export default function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = Object.fromEntries(new FormData(e.currentTarget)) as LoginFormData;
          void dispatch(thunkAuthLogin(formData));
        }}
      >
        <FormControl
          sx={{
            padding: '10px',
            height: '200px',
            justifyContent: 'space-around',
            borderRadius: '12px',
            border: '2px solid #FACDC4',
          }}
        >
          <CustomTextField name="email" label="Почта" type="text" />
          <CustomTextField name="password" label="Пароль" type="text" />
          <Button type="submit">Войти</Button>
        </FormControl>
      </form>
    </Box>
  );
}
