import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import DefaultAvatar from '../../assets/photo-cover.svg';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { UserCardType } from '../../types';
import { UserStyledCard } from '../Base.styled';

// const styles = theme => ({
//   card: {
//     [theme.breakpoints.up('md')]: {
//       paddingRight: '32px',
//       paddingLeft: '32px',
//     },
//   },
// });

export const UserCard = ({ user }: UserCardType) => {
  return (
    <>
      <UserStyledCard
      // raised={true}
      >
        <Avatar
          sx={{ width: '70px', height: '70px' }}
          alt={user.name}
          src={user.photo || DefaultAvatar}
        />
        <CardContent
          sx={{
            width: '260px',
            p: '0',
            '&:last-child': { p: '0' },
          }}
        >
          <Typography
            noWrap={true}
            align="center"
            gutterBottom
            variant="body1"
            component="h3"
            sx={{
              m: '0',
              pt: '20px',
              pb: '20px',
            }}
          >
            {user.name}
          </Typography>

          <Box>
            <Typography align="center" noWrap={true} variant="body1">
              {user.position}
            </Typography>
            <Typography align="center" noWrap={true} variant="body1">
              {user.email}
            </Typography>
            <Typography align="center" noWrap={true} variant="body1">
              {user.phone}
            </Typography>
          </Box>
        </CardContent>
      </UserStyledCard>
    </>
  );
};
