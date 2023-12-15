import React from 'react';
import { Container } from "@chakra-ui/react";
import TeacherAccountForm from '../forms/TeacherAccountForm';

export default function TeacherAccountPage(): JSX.Element {
    return (
      <Container >
        <TeacherAccountForm />
      </Container>
    );
  }