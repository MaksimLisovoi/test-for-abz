import { Typography } from '@mui/material';
import { Background, HeroTextBlock } from '../Base.styled';

import { ButtonPrimary } from '../ButtonPrimary';

export const HeroSection = () => {
  return (
    <Background
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <HeroTextBlock>
        <Typography align="center" variant="h1" component="h1" mb="21px">
          Test assignment for front-end developer
        </Typography>
        <Typography align="center" variant="body1" component="p" mb="32px">
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </Typography>
        <ButtonPrimary href="#sign-up" text="SignUp"></ButtonPrimary>
      </HeroTextBlock>
    </Background>
  );
};
