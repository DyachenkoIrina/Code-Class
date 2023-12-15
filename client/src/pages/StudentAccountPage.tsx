import React from 'react';
import TaskContainer from '../components/StudentAccount/TaskContainer';
import ProfileContainer from '../components/StudentAccount/ProfileContainer';

export default function StudentAccountPage(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TaskContainer />
      <ProfileContainer />
    </div>
  );
}
