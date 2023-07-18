import { Box, useTheme } from '@mui/system';
import { TextFieldBlockProps, fileBlockProps } from '../../types';
import { Input, Button, OutlinedInput, FormHelperText } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';

export const FileInputBlock = ({ register, errors, isSubmitSuccessful }: fileBlockProps) => {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    isSubmitSuccessful && setFile(null);
  }, [isSubmitSuccessful]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: '50px' }}>
      <Box sx={{ display: 'flex' }}>
        <Input
          {...register('photo', {
            onChange: handleFileChange,
          })}
          type="file"
          id="selectImage"
          sx={{
            display: 'none',
          }}
        />
        <label htmlFor="selectImage">
          <Button
            sx={{
              height: '100%',
              boxShadow: 'none',
              borderRadius: '4px 0px 0px 4px',
              border: '1px solid rgba(0, 0, 0, 0.87)',
              textTransform: 'capitalize',
              borderColor: errors['photo'] ? `${theme.palette.error.main}` : 'rgba(0, 0, 0, 0.87)',
            }}
            variant="contained"
            component="span"
          >
            Upload
          </Button>
        </label>
        <OutlinedInput
          name="photo"
          sx={{
            width: '100%',
            borderRadius: '0px 4px 4px  0px ',
            '.MuiInputBase-input': { padding: '16px 14px' },
          }}
          value={file?.name || ''}
          readOnly
          placeholder="Upload Your photo"
          error={!!errors['photo']}
        />
      </Box>
      <FormHelperText error id="selectImage-error">
        {errors['photo'] ? errors['photo'].message : ''}
      </FormHelperText>
    </Box>
  );
};
