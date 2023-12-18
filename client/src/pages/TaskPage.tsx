import React from 'react';
import { Container } from '@chakra-ui/react';
import QuestionContainer from '../components/TaskStudent/QuestionContainer';
import MonacoEditorContainer from '../components/TaskStudent/MonacoEditorContainer';

export default function TaskPage(): JSX.Element {
  return (
    <div>
       <QuestionContainer />
      <MonacoEditorContainer/>
    </div>
  );
}
