import { FormControl} from '@chakra-ui/react';
import React from 'react';
import TopicContainer from '../components/StudentAccount/TopicContainer';
import ProfileContainerSt from '../components/ProfileContainerSt';

export default function TeacherAccountFormSt(): JSX.Element {
  return (
    <FormControl sx={{marginTop:'20px', display: 'flex', justifyContent: 'space-around' }} >
    <TopicContainer />
      <ProfileContainerSt />
    </FormControl>
  );
}