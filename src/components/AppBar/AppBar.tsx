import { Box } from '@mui/material';

import { Nav } from '../Nav';
import { BaseContainer } from '../Base.styled';

export const AppBar = () => {
  return (
    <Box
      component="header"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <BaseContainer>
        <Nav />
      </BaseContainer>
    </Box>
  );
};
