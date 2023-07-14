import { Box } from '@mui/system';
import { BaseContainer } from './Base.styled';
import { Typography } from '@mui/material';

type SectionProps = {
  heading: string;
  children?: any;
};

export const BaseSection = ({ heading = '', children }: SectionProps) => {
  //   const theme = useTheme();
  return (
    <Box component="section" mt="140px">
      <BaseContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography align="center" variant="h1" component="h2" mb="50px">
            {heading}
          </Typography>
          {children}
        </Box>
      </BaseContainer>
    </Box>
  );
};
