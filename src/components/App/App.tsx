import { Box } from '@mui/system';
import { AppBar } from '../AppBar';
import { HeroSection } from '../HeroSection/HeroSection';
import { UsersSection } from '../UsersSection';
import { BaseSection } from '../UsersSection/BaseSection';
import { UserCardsBlock } from '../UserCardsBlock';
// import '@fontsource/nunito/400.css';
export const App = () => {
  return (
    <>
      <AppBar />
      <Box component="main">
        <HeroSection />
        <BaseSection heading="Working with GET request">
          <UserCardsBlock />
        </BaseSection>
      </Box>
    </>
  );
};
