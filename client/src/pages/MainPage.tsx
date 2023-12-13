import React from 'react';
import { Container, Grid } from '@mui/material';
import NoteCard from '../components/NoteCard';
import { useAppSelector } from '../redux/hook';

import AddNoteForm from '../components/AddNoteForm';
import NoteList from '../components/NoteList';

export default function MainPage(): JSX.Element {
  // const notes = useAppSelector((state) => state.notes);
  return(
    
    <Container sx={{ margin: 'auto' }}>
    
      <AddNoteForm />
    
      <NoteList />
   
    </Container>
    
  )
}
