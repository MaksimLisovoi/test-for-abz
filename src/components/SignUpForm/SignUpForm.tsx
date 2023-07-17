import { FormControl } from '@mui/base';
import {
  FormControlLabel,
  FormLabel,
  Input,
  RadioGroup,
  TextField,
  Button,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import { Box, styled, useTheme } from '@mui/system';
import { ButtonPrimary } from '../Base.styled';
import { useEffect, useState, ChangeEvent } from 'react';
import { createNewUser, getPositions, getToken } from '../../services/userApi';
import { PositionsState, createNewUserType } from '../../types';
import { CustomRadioBtn } from '../CustomRadioBtn';

import { useForm, SubmitHandler } from 'react-hook-form';
import { TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../services/validation';

type RegisterInput = TypeOf<typeof registerSchema>;

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

export const SignUpForm = (): JSX.Element => {
  const theme = useTheme();
  const [file, setFile] = useState<File | null>(null);
  const [positions, setPositions] = useState<PositionsState>([]);
  const [positionValue, setPositionValue] = useState<number>(1);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const { onChange, ref } = register('photo');

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  useEffect(() => {
    getPositions().then(data => setPositions(data));
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionValue(Number((event.target as HTMLInputElement).value));
  };

  const onSubmitHandler: SubmitHandler<RegisterInput> = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id);
    formData.append('photo', data.photo[0]);

    // getToken().then(token => createNewUser(formData, token));
  };
  console.log(errors);

  return (
    <Box
      onSubmit={handleSubmit(onSubmitHandler)}
      component="form"
      noValidate
      sx={{
        color: 'black',
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <TextField
        sx={inputStyles}
        autoComplete="given-name"
        id="name"
        label="Your Name"
        autoFocus
        error={!!errors['name']}
        helperText={errors['name'] ? errors['name'].message : ''}
        {...register('name')}
      />
      <TextField
        sx={inputStyles}
        id="email"
        label="Email"
        autoComplete="email"
        error={!!errors['email']}
        helperText={errors['email'] ? errors['email'].message : ''}
        {...register('email')}
      />

      <TextField
        sx={{ ...inputStyles, marginBottom: '29px' }}
        label="Phone"
        type="phone"
        id="phone"
        autoComplete="phone"
        error={!!errors['phone']}
        helperText={errors['phone'] ? errors['phone'].message : '+38 (XXX) XXX - XX - XX'}
        {...register('phone')}
      />
      <Box sx={{ mb: '47px' }}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Select your position</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            // defaultChecked={true}
            defaultValue={1}
            value={positionValue ? positionValue : 1}
            onChange={handleRadioChange}
          >
            {positions &&
              positions.map(position => (
                <FormControlLabel
                  {...register('position_id')}
                  key={position.id}
                  value={position.id}
                  control={
                    <CustomRadioBtn
                      sx={{
                        '& .MuiSvgIcon-root': {
                          fontSize: 20,
                        },
                        '&.Mui-checked': {
                          color: `${theme.palette.custom.accent}`,
                        },
                      }}
                    />
                  }
                  label={position.name}
                />
              ))}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{ display: 'flex', mb: '50px' }}>
        <Input
          {...register('photo')}
          ref={ref}
          type="file"
          id="selectImage"
          onChange={handleFileChange}
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
            }}
            variant="contained"
            component="span"
          >
            Upload
          </Button>
        </label>
        <OutlinedInput
          sx={{
            width: '100%',
            borderRadius: '0px 4px 4px  0px ',
            '.MuiInputBase-input': { padding: '16px 14px' },
          }}
          value={file?.name}
          readOnly
          placeholder="Upload Your photo"
          error={!!errors['photo']}
        />

        <FormHelperText error id="selectImage-error" />
      </Box>

      <ButtonPrimary
        disabled={!errors}
        type="submit"
        variant="contained"
        sx={{ mt: '50px', margin: '0 auto' }}
      >
        Sign Up
      </ButtonPrimary>
    </Box>
  );
};
