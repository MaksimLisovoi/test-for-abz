import { Box } from '@mui/system';
import { UserCard } from './UserCard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { getUsersList } from '../../services/userApi';
import { ButtonPrimary } from '../Base.styled';
import { UserState } from '../../types';

export const UserCardsBlock = (): JSX.Element => {
  const [pageState, setPageState] = useState<UserState>({
    page: 1,
    count: 6,
    users: [],
    isLoading: false,
  });

  const { page, count, users } = pageState;

  useEffect(() => {
    getUsersList(page, count).then(({ users }) =>
      setPageState(prevState => ({ ...prevState, users: [...prevState.users, ...users] })),
    );
  }, [page, count]);

  const handleShowMore = () => {
    setPageState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  return (
    <Box
      pb="50px"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid2
        container
        columnSpacing={{ xs: '20px', md: '16px', lg: '29px' }}
        rowSpacing={{ xs: '20px', md: '16px', lg: '29px' }}
      >
        {users &&
          users.map(user => (
            <Grid2 xs={12} md={6} lg={4}>
              <UserCard user={user} />
            </Grid2>
          ))}
      </Grid2>
      <ButtonPrimary onClick={handleShowMore} sx={{ mt: '50px' }} variant="contained">
        ShowMore
      </ButtonPrimary>
    </Box>
  );
};
