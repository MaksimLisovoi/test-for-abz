import { Box, useTheme } from '@mui/system';
import { UserCard } from './UserCard';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from 'react';
import { getUsersList } from '../../services/userApi';
import { ButtonPrimary } from '../Base.styled';
import { UserState } from '../../types';
import { useSuccessForm } from '../../context/submitFormCotext';
import { Loader } from '../Loader/Loader';

export const UserCardsBlock = (): JSX.Element => {
  const { isMySuccessSubmit, setSubmitSuccessFalse } = useSuccessForm();
  // const { pageState, setPageState } = useUserCardsState();

  const [pageState, setPageState] = useState<UserState>({
    page: 1,
    count: 6,
    users: [],
    isLoading: false,
    nextLink: '',
  });

  const { page, count, users, nextLink, isLoading } = pageState;

  const theme = useTheme();

  useEffect(() => {
    getUsersList(page, count).then(data => {
      setPageState(prevState => ({
        ...prevState,
        users: [...prevState.users, ...data.users],
        nextLink: data.links.next_url,
      }));
    });
  }, [page, count]);

  useEffect(() => {
    isMySuccessSubmit &&
      setPageState(prevState => ({
        ...prevState,
        page: 1,
        users: [],
      }));
    // setSubmitSuccessFalse();
  }, [isMySuccessSubmit]);

  const handleShowMore = () => {
    setPageState(prevState => ({ ...prevState, page: prevState.page + 1 }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoading ? (
        <Loader height="70vh" size={48} color={`${theme.palette.custom.accent}`} />
      ) : (
        <>
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
          <ButtonPrimary
            disabled={nextLink === null}
            onClick={handleShowMore}
            sx={{ mt: '50px' }}
            variant="contained"
          >
            ShowMore
          </ButtonPrimary>
        </>
      )}
    </Box>
  );
};
