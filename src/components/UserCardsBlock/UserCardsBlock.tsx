import { Box } from '@mui/system';
import { UserCard } from './UserCard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { getUsersList } from '../../services/userApi';

export const UserCardsBlock = (): JSX.Element => {
  const [pageState, setPageState] = useState({
    page: 1,
    count: 6,
    users: [],
    isLoading: false,
  });

  const { page, count, users } = pageState;

  useEffect(() => {
    getUsersList(page, count).then(({ users }) =>
      setPageState(prevState => ({ ...prevState, users })),
    );
  }, [page, count]);

  useEffect(() => {
    getUsersList(page, count).then(data => console.log(data));
  }, [page, count]);

  return (
    <Box pb="50px">
      <Grid2 container spacing={'16px'}>
        {users &&
          users.map(user => (
            <Grid2 xs={12} md={6} lg={4}>
              <UserCard user={user} />
            </Grid2>
          ))}
      </Grid2>
    </Box>
  );
};
