import { Button, Center, FormControl } from '@chakra-ui/react';
import React from 'react';

import { useParams } from 'react-router-dom';
import ProfileContainerSt from '../components/ProfileContainerSt';
import TopicContainerSt from '../components/TopicConteinerSt';

export default function TeacherAccountFormSt(): JSX.Element {
  
  
  return (
    <Center>
      <FormControl
        sx={{
          display: 'flex',
          gap: '20px',
          margin:'70px'
        }}
      >
        <ProfileContainerSt />
        <TopicContainerSt />
    
      </FormControl>
    </Center>
  );
}
