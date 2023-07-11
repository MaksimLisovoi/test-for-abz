import { Typography } from '@mui/material';
import { Background, BaseContainer, HeroTextBlock } from '../Base.styled';
import { Box } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import { ButtonPrimary } from '../ButtonPrimary';

// const styles = theme => ({
//   root: {
//     backgroundColor: 'blue',
//     // Match [md, ∞)
//     //       [900px, ∞)
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: 'red',
//     },
//   },
// });

export const HeroSection = () => {
  const theme = useTheme();

  return (
    <BaseContainer
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Background>
        <HeroTextBlock>
          <Typography align="center" variant="h1" component="h1" mb="21px">
            Test assignment for front-end developer
          </Typography>
          <Typography align="center" variant="body1" component="p" mb="32px">
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS,
            JS with a vast understanding of User design thinking as they'll be building web
            interfaces with accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </Typography>
          <ButtonPrimary text="SignUp" />
        </HeroTextBlock>
      </Background>
    </BaseContainer>
  );
};
