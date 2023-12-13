import React from 'react';
import { Button, FormControl } from '@mui/material';
import CustomTextField from './CustomTextField/CustomTextField';
import { useAppDispatch } from '../redux/hook';
import { thunkAddNote } from '../redux/slices/notes/createAsyncThunk';
import type { AddNoteFormData } from '../types/notes';

function AddNoteForm(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget)) as AddNoteFormData;
        void dispatch(thunkAddNote(formData));
      }}
    >
      <FormControl
        sx={{
          margin: '30px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100px',
          borderRadius: '12px',
          border: '2px solid #FACDC4',
        }}
      >
        <CustomTextField name="title" label="Заголовок" type="text" />
        <CustomTextField name="description" label="Описание" type="text" />
        <Button type="submit">Добавить</Button>
      </FormControl>
    </form>
  );
}

export default React.memo(AddNoteForm);
