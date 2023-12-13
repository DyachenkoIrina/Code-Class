import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useAppSelector } from '../redux/hook';
import NoteCard from '../components/NoteCard';

export default function Favourites(): JSX.Element {
  const notes = useAppSelector((state) => state.notes.favourites);
  console.log(notes);

  return (
    <Grid container spacing={3}>
      {notes?.map((card) => (
        <Grid key={card.id} item xs={4}>
          <NoteCard note={card} />
        </Grid>
      ))}
    </Grid>
  );
}
