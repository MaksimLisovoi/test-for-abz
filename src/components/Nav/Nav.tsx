import { Button, Link, Toolbar } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { Box, borderRadius } from '@mui/system';
import Logo from '../../assets/logo.svg';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary';

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
        <ButtonPrimary text="Users" />
        <ButtonPrimary text="SignUp" />
      </Box>
    </Toolbar>
  );
};
