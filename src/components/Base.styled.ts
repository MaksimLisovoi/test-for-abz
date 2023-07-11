import { Box, Container, styled } from '@mui/system';
import HeroImg from '../assets/pexels-alexandr-podvalny-1227513.jpeg';
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

export const HeroTextBlock = styled('div')(({ theme }) => ({
  color: `${theme.palette.text.secondary}`,
  maxWidth: '380px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    marginTop: '40px',
    marginBottom: '40px',
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

export const Background = styled(Box)(() => ({
  width: '100%',
  height: '100%',

  // background:
  // 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(`${HeroImg}`), lightgray -952.661px -317.009px / 342.315% 164.03% no-repeat',
  // backgroundColor: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
  backgroundImage: ` linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url(${HeroImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}));
