import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import SuccessImg from '../../assets/success-image.svg';

export const SuccessImage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: ' column' }}>
      <Typography align="center" variant="h1" component="h2" mb="50px">
        User successfully registered
      </Typography>

      <Box component="img" src={SuccessImg} alt="" sx={{ margin: '0 auto' }} />
    </Box>
  );
};
