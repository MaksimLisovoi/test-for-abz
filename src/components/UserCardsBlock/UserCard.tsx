import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import MyAvatar from '../../assets/photo-cover.svg';
import { Avatar } from '@mui/material';
import { Box } from '@mui/system';

type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
};

type UserCard = { user: User };

export const UserCard = ({ user }: any) => {
  console.log(user);
  return (
    <>
      <Card
        sx={{
          p: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ width: '70px', height: '70px' }} alt={user.name} src={user.photo} />
        <CardContent
          sx={{
            // flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            p: '0',
            '&:last-child': { p: '0' },
          }}
        >
          <Typography
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="body1">{user.position}</Typography>
            <Typography variant="body1">{user.email}</Typography>
            <Typography variant="body1">{user.phone}</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
