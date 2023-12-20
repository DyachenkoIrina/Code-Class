import React from 'react';
import TeacherAccountFormSt from '../forms/TeacherAccountFormSt';

export default function TeacherAccountPageSt(): JSX.Element {
  return (
    <div
      style={{
        marginTop: '20px',
        marginLeft: '50px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <TeacherAccountFormSt />
    </div>
  );
}
