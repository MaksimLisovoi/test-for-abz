import { Container, styled } from '@mui/system';

import HeroMob from '../assets/image360.jpg';
import HeroTablet from '../assets/image1024.jpg';
import HeroDesktop from '../assets/image1170.jpg';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

export const BaseContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingRight: '16px',
    paddingLeft: '16px',
  },
  [theme.breakpoints.up('md')]: {
    paddingRight: '32px',
    paddingLeft: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingRight: '60px',
    paddingLeft: '60px',
  },
  [theme.breakpoints.up('xl')]: {
    paddingRight: '0',
    paddingLeft: '0',
  },
}));
export const Background = styled(BaseContainer)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${HeroMob})`,
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),${HeroTablet})`,
  },
  [theme.breakpoints.up('lg')]: {
    backgroundImage: `url(linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%),${HeroDesktop})`,
  },

  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));

export const HeroTextBlock = styled('div')(({ theme }) => ({
  color: `${theme.palette.custom.heroTextColor}`,
  maxWidth: '380px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    marginTop: '40px',
    marginBottom: '71px',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '90px',
    marginBottom: '90px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '164px',
    marginBottom: '164px',
  },
}));

export const UserStyledCard = styled(Card)(({ theme }) => ({
  margin: '0 auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    maxWidth: '360px',
  },
}));

export const ButtonPrimary = styled(Button)(({ theme }) => ({
  backgroundColor: `${theme.palette.custom.main}`,
  lineHeight: '1.625',
  minWidth: '100px',
  padding: '4px 0',
  fontWeight: 400,
  borderRadius: '80px',
  textTransform: 'none',
}));
