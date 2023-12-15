import { FormControl} from '@chakra-ui/react';
import React from 'react';
import TeacherAccountTasksList from '../lists/TeacherAccountTasksList';

export default function TeacherAccountFormSt(): JSX.Element {
  return (
    <FormControl sx={{marginTop:'20px'}} >
    <TeacherAccountTasksList/>
    </FormControl>
  );
}