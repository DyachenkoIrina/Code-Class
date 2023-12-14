import { Button, FormControl} from '@chakra-ui/react';
import React from 'react';
import TeacherAccountList from '../lists/TeacherAccountList';

export default function TeacherAccountForm(): JSX.Element {
  return (
    <FormControl>
      <Button type="submit">Создать новое задание</Button>
    <TeacherAccountList/>
    </FormControl>
  );
}
