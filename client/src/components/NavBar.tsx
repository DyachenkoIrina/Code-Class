import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { logoutThunk } from '../redux/slices/auth/authThunks';

export default function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgb(103, 49, 251)' }}>
      <Toolbar>
        <Grid container justifyContent="space-around">
          <Grid item display="flex">
            <Typography variant="h6" sx={{ color: 'orange' }}>
              {auth.user.status === 'authenticated'
                ? ` Привет, ${auth.user.name}!`
                : 'Привет, гость!'}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} href="/">
              Главная
            </Button>
            <Button color="inherit" component={NavLink} to="/favourites">
              Избранное
            </Button>
            {auth.user.status !== 'authenticated' ? (
              <>
                <Button color="inherit" component={Link} href="/login">
                  Авторизация
                </Button>
                <Button color="inherit" component={Link} href="/signup">
                  Регистрация
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => void dispatch(logoutThunk())}>
                  Выйти
                </Button>
                {/* <Button color="inherit" onClick={() => handleOpen()}>
                  Товар
                </Button> */}
              </>
            )}
          </Grid>
        </Grid>
      </Toolbar>
      {/* <AddProductFormModal handleClose={handleClose} open={open} /> */}
    </AppBar>
  );
}
