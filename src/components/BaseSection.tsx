import { Box } from '@mui/system';
import { BaseContainer } from './Base.styled';
import { Typography } from '@mui/material';

type SectionProps = {
  heading?: string;
  id?: string;
  children?: any;
};

export const BaseSection = ({ heading = '', children, id = '' }: SectionProps) => {
  //   const theme = useTheme();
  return (
    <Box component="section" mt="140px" id={id}>
      <BaseContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography
            sx={{ display: heading === '' ? 'none' : '' }}
            align="center"
            variant="h1"
            component="h2"
            mb="50px"
          >
            {heading}
          </Typography>
          {children}
        </Box>
      </BaseContainer>
    </Box>
  );
};
