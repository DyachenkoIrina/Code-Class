import { Container } from '@mui/material';
import React from 'react';
import AddNoteForm from '../components/AddNoteForm';
import NoteList from '../components/NoteList';
import Loader from '../components/Loader';
import { useAppSelector } from '../redux/hook';


export default function NotePage(): JSX.Element {
  const auth = useAppSelector((state) => state.auth)
  return (
    <Container sx={{ margin: 'auto' }}>
      <AddNoteForm />
      <Loader isLoading={auth.user.status === 'pending'}>
        <NoteList />
      </Loader>
    </Container>
  );
}
