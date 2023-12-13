import React from 'react';
import { Box, Button, FormControl } from '@mui/material';
import CustomTextField from './CustomTextField/CustomTextField';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import type { AddNoteFormData } from '../types/notes';
import { thunkEditNote } from '../redux/slices/notes/createAsyncThunk';
import { clearCurrentNote } from '../redux/slices/notes/notesSlice';

function EditNoteForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const content = useAppSelector((state) => state.notes.currentNote);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNoteFormData;
        void dispatch(thunkEditNote({ formData, id: content?.id }));
      }}
    >
      <FormControl
        sx={{
          margin: '30px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: '600px',
          borderRadius: '12px',
        }}
      >
        <CustomTextField name="title" label="Заголовок" type="text" defaultValue={content?.title} />
        <CustomTextField
          name="description"
          label="Заметка"
          type="text"
          defaultValue={content?.description}
        />

        <Box>
          <Button type="submit" color="inherit">
            Изменить
          </Button>
          <Button color="inherit" onClick={() => dispatch(clearCurrentNote())}>
            Закрыть
          </Button>
        </Box>
      </FormControl>
    </form>
  );
}

export default React.memo(EditNoteForm);
