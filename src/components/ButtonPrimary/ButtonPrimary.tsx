import { Button, Link } from '@mui/material';
import { useTheme } from '@mui/system';

type ButtonProps = {
  text: string;
};

export const ButtonPrimary = ({ text }: ButtonProps) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      component={Link}
      sx={{
        // pr: '29px',
        // pl: '29px',
        backgroundColor: `${theme.palette.custom.main}`,
        lineHeight: '1.625',
        minWidth: '100px',
        p: '4px 0',
        fontWeight: 400,
        borderRadius: 5,
        textTransform: 'none',
        '&:not(:last-child)': { mr: '10px' },
      }}
    >
      {text}
    </Button>
  );
};
