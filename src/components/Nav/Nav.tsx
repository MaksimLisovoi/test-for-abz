import { Link, Toolbar } from '@mui/material';

import { Box } from '@mui/system';
import Logo from '../../assets/logo.svg';
import { ButtonPrimary } from '../Base.styled';

export const Nav = () => {
  return (
    <Toolbar
      variant="dense"
      disableGutters={true}
      component="nav"
      sx={{
        pt: '13px',
        pb: '13px',

        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Link
        href="/"
        sx={{
          height: 26,
        }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '100%',
          }}
          alt="logo"
          src={Logo}
        />
      </Link>
      <Box display={'flex'}>
        <ButtonPrimary
          href="#users"
          sx={{ '&:not(:last-child)': { mr: '10px' } }}
          variant="contained"
        >
          Users
        </ButtonPrimary>
        <ButtonPrimary
          href="#sign-up"
          sx={{ '&:not(:last-child)': { mr: '10px' } }}
          variant="contained"
        >
          SignUp
        </ButtonPrimary>
      </Box>
    </Toolbar>
  );
};
