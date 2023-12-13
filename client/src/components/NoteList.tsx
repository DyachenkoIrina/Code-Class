import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import NoteCard from './NoteCard';
import { useAppSelector } from '../redux/hook';
import EditNoteFormModals from './EditNoteFormModal';

export default function NoteList(): JSX.Element {
  const notes = useAppSelector((state) => state.notes.notes);
  console.log(notes);

  return (
    <>
    <Grid container spacing={3}>
      {notes?.map((card) => (
        <Grid key={card.id} item xs={4}>
          <NoteCard note={card} />
        </Grid>
      ))}
    </Grid>
    <EditNoteFormModals/>
    </>
  );
}
