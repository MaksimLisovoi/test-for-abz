import { Box, TextField } from '@mui/material';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TextFieldBlockProps } from '../../types';

const inputStyles = {
  marginBottom: '50px',
  '.MuiInputBase-input': { padding: '16px 14px' },
  '.MuiFormHelperText-root': {
    mt: '4px',
    mb: ' 0',
    ml: '16px',
    fontSize: '12px',
    lineHeight: '1.16',
  },
};

export const TextFieldBlock = ({ register, errors }: TextFieldBlockProps) => {
  return (
    <Box>
      <TextField
        fullWidth
        sx={inputStyles}
        autoComplete="given-name"
        id="name"
        label="Your Name"
        error={!!errors['name']}
        helperText={errors['name'] ? errors['name'].message : ''}
        {...register('name')}
      />
      <TextField
        fullWidth
        sx={inputStyles}
        id="email"
        label="Email"
        autoComplete="email"
        error={!!errors['email']}
        helperText={errors['email'] ? errors['email'].message : ''}
        {...register('email')}
      />
      <TextField
        fullWidth
        sx={{ ...inputStyles, marginBottom: '29px' }}
        label="Phone"
        type="phone"
        id="phone"
        autoComplete="phone"
        error={!!errors['phone']}
        helperText={errors['phone'] ? errors['phone'].message : '+38 (XXX) XXX - XX - XX'}
        {...register('phone')}
      />
    </Box>
  );
};
