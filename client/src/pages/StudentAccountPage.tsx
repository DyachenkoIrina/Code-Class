import React from 'react';

import TopicContainer from '../components/StudentAccount/TopicContainer';
import ProfileContainer from '../components/StudentAccount/ProfileContainer';

export default function StudentAccountPage(): JSX.Element {
  return (
    <div style={{ marginTop: '20px', marginLeft: '50px', display: 'flex', justifyContent: 'space-around'  }}>
      <TopicContainer />
      <ProfileContainer />
    </div>
  );
}
