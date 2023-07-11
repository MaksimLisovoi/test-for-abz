import { Button, Link } from '@mui/material';

type ButtonProps = {
  text: string;
};

export const ButtonPrimary = ({ text }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      component={Link}
      sx={{
        // pr: '29px',
        // pl: '29px',
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
