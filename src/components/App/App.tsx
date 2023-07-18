import { Box } from '@mui/system';
import { AppBar } from '../AppBar';
import { HeroSection } from '../HeroSection/HeroSection';
import { BaseSection } from '../BaseSection';
import { UserCardsBlock } from '../UserCardsBlock';
import { SignUpForm } from '../SignUpForm';
// import '@fontsource/nunito/400.css';
export const App = () => {
  return (
    <>
      <AppBar />
      <Box component="main" sx={{ pb: '140px' }}>
        <HeroSection />
        <BaseSection id="users" heading="Working with GET request">
          <UserCardsBlock />
        </BaseSection>
        <BaseSection id="sign-up">
          <SignUpForm />
        </BaseSection>
      </Box>
    </>
  );
};
