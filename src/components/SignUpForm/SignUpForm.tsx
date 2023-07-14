import { Button, FormControl } from '@mui/base';
import { FormControlLabel, FormLabel, Input, RadioGroup, TextField } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { ButtonPrimary } from '../Base.styled';
import { useEffect, useState, ChangeEvent } from 'react';
import { createNewUser, getPositions } from '../../services/userApi';
import { PositionsState, createNewUserType } from '../../types';
import { CustomRadioBtn } from '../CustomRadioBtn';

import { useForm, SubmitHandler } from 'react-hook-form';
import { object, any, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import * as regex from '../../constants/regexes';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg'];

const registerSchema = object({
  name: string()
    .nonempty('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be less than 60 characters'),
  email: string()
    .nonempty('Email is required')
    .regex(regex.emailRegex, 'HEY! Email is invalid ')
    .email('Email is invalid'),
  phone: string().regex(regex.phoneRegex, 'Number format should be +38 (XXX) XXX - XX - XX'),
  position_id: string(),
  photo: any(),
  // .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  // .refine(
  //   file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
  //   'Only .jpg, .jpeg formats are supported.',
  // ),
});
type RegisterInput = TypeOf<typeof registerSchema>;

export const SignUpForm = (): JSX.Element => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }
    console.log(file);
  };

  const [positions, setPositions] = useState<PositionsState>([]);
  const [positionValue, setPositionValue] = useState<number>(1);

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const { onChange, ref } = register('photo');

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

  const onSubmitHandler: SubmitHandler<RegisterInput> = values => {
    console.log(values);
    // createNewUser(values);
  };
  console.log(errors);

  const theme = useTheme();

  const inputStyles = {
    marginBottom: '50px',
    '.MuiInputBase-input': { padding: '16px 14px' },
    '.MuiFormHelperText-root': {
      mt: '0',
      mb: ' 0',
      ml: '16px',
      fontSize: ' 12px',
      lineHeight: '1.16',
    },
  };

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

      <div>
        <label {...register('photo')}>Any file (...register):</label>
        <Input ref={ref} type="file" onChange={handleFileChange} />

        <div>{file && `${file.name} - ${file.type}`}</div>

        <button onClick={handleUploadClick}>Upload</button>
      </div>

      <ButtonPrimary type="submit" variant="contained" sx={{ mt: '50px', margin: '0 auto' }}>
        Sign Up
      </ButtonPrimary>
    </Box>
  );
};
