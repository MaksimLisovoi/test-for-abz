import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

type LoaderProps = {
  height?: string;
  size?: number;
  color?: string;
};

export const Loader = ({ height, size = 40, color }: LoaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { height },
        color: { color },
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
};
