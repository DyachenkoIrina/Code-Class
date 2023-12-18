import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TopicContainer from '../components/StudentAccount/TopicContainer';
import ProfileContainer from '../components/StudentAccount/ProfileContainer';
import EditFormModal from '../forms/EditFormModal';

export default function StudentAccountPage(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <TopicContainer />
      <ProfileContainer />
      <Button onClick={() => setShow(true)}>Редактировать</Button>
      <EditFormModal show={show} setShow={setShow} />
    </div>
  );
}
