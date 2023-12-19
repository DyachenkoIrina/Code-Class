import { Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkTeacherGroupLoad } from '../redux/slices/teacher/thunkActions';

export default function TeacherAccountList(): JSX.Element {
  const groups1 = useAppSelector((state) => state.teacherSlice.teacherGroups);
  // console.log('---groups map--->', groups1)
  const teacher = useAppSelector((state) => state.authSlice.user);
  // console.log('teaher---->', teacher);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (teacher.id) {
      void dispatch(thunkTeacherGroupLoad(teacher.id));
    }
  }, [teacher]);
  return (
    <Grid
      sx={{
        marginTop: '70px',
        marginBottom: '100px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {groups1.map((group) => (
        <Grid key={group.id}>
          <GroupCard group={group} />
        </Grid>
      ))}
    </Grid>
  );
}
