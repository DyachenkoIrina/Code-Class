import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { NoteType } from '../types/notes';
import { useAppDispatch } from '../redux/hook';
import { thunkDeleteNote } from '../redux/slices/notes/createAsyncThunk';
import { addFavourites, setCurrentNote } from '../redux/slices/notes/notesSlice';

type NoteTypeProps = {
  note: NoteType;
};

function NoteCard({ note }: NoteTypeProps): JSX.Element {
  // const { deleteProductHandler } = useProductsHandlers();
  const dispatch = useAppDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {note.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {note.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => void dispatch(thunkDeleteNote(note.id))}>
          Удалить
        </Button>
        <Button size="small" onClick={() => void dispatch(addFavourites(note))}>
          😍
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch(setCurrentNote(note));
          }}
        >
          Изменить
        </Button>
      </CardActions>
    </Card>
  );
}

export default React.memo(NoteCard);
