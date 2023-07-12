import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import DefaultAvatar from '../../assets/photo-cover.svg';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';
import { UserCardType } from '../../types';

export const UserCard = ({ user }: UserCardType) => {
  return (
    <>
      <Card
        // raised={true}
        sx={{
          maxWidth: '340px',
          p: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
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
          {/* <CardContent
            sx={{
              width: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              p: '0',
              '&:last-child': { p: '0' },
            }}
          >
            <Typography noWrap={true} variant="body1">
              {user.position}
            </Typography>
            <Typography noWrap={true} variant="body1">
              {user.email}
            </Typography>
            <Typography variant="body1">{user.phone}</Typography>
          </CardContent> */}
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
      </Card>
    </>
  );
};
