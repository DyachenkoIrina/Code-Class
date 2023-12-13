import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import EditNoteForm from './EditNoteForm';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { clearCurrentNote } from '../redux/slices/notes/notesSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type AddNoteFormModalProps = {
  open: boolean;
};

export default function EditNoteFormModals(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.notes.currentNote);
  console.log(show);
  
  return (
    <div>
      <Modal
        open={!!show}
        onClose={() => dispatch(clearCurrentNote())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditNoteForm/>
        </Box>
      </Modal>
    </div>
  );
}
