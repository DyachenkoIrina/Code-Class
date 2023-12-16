import React from 'react';
import TopicContainer from '../components/StudentAccount/TopicContainer';
import ProfileContainer from '../components/StudentAccount/ProfileContainer';

export default function StudentAccountPage(): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TopicContainer />
      <ProfileContainer />
    </div>
  );
}
