import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { NoteSliceState, NoteType } from '../../../types/notes';
import { thunkAddNote, thunkDeleteNote, thunkEditNote, thunkNotesLoad } from './createAsyncThunk';

const initialState: NoteSliceState = {
  notes: [],
  favourites: [],
  currentNote: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNotes: (state, action: PayloadAction<NoteType>) => {
      state.notes.unshift(action.payload);
    },
    deleteNote: (state, action: PayloadAction<NoteType['id']>) => {
      const targetIndex = state.notes.findIndex((note) => note.id === action.payload);
      if (targetIndex !== -1) {
        state.notes.splice(targetIndex, 1);
      }
    },
    setCurrentNote: (state, action: PayloadAction<NoteSliceState['currentNote']>) => {
      state.currentNote = action.payload;
    },
    clearCurrentNote: (state) => {
      state.currentNote = null;
    },
    addFavourites: (state, action: PayloadAction<NoteType>) => {
      state.favourites.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkNotesLoad.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(thunkNotesLoad.rejected, (state, action) => {
      console.log(action.error);
    });
    builder.addCase(thunkAddNote.fulfilled, (state, action) => {
      state.notes.unshift(action.payload);
    });
    builder.addCase(thunkEditNote.fulfilled, (state, action) => {
      const indexNote = state.notes.findIndex((note) => note.id === action.payload.id);
      if (indexNote !== -1) {
        state.notes[indexNote] = action.payload;
      }
      state.currentNote = null;
    });
    builder.addCase(thunkDeleteNote.fulfilled, (state, action) => {
      const indexNote = state.notes.findIndex((note) => note.id === action.payload);
      if (indexNote !== -1) {
        state.notes.splice(indexNote, 1);
      }
      state.currentNote = null;
    });
  },
});

export const { addNotes, deleteNote, setCurrentNote, clearCurrentNote, addFavourites } =
  notesSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default notesSlice.reducer;
