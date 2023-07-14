import { FormControl } from '@mui/base';
import { FormControlLabel, FormLabel, RadioGroup, TextField } from '@mui/material';
import { Box, useTheme } from '@mui/system';
import { ButtonPrimary } from '../Base.styled';
import { useEffect, useState } from 'react';
import { createNewUser, getPositions } from '../../services/userApi';
import { PositionsState } from '../../types';
import { CustomRadioBtn } from '../CustomRadioBtn';

import { useForm, Controller, useFormState } from 'react-hook-form';
import { nameValidation } from './validation';

export const SignUpForm = (): JSX.Element => {
  const [positions, setPositions] = useState<PositionsState>([]);
  const [positionValue, setPositionValue] = useState<number>(1);

  useEffect(() => {
    getPositions().then(data => setPositions(data));
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPositionValue(Number((event.target as HTMLInputElement).value));
  };

  // const { handleSubmit, control } = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     phone: '',
  //     position_id: 1,
  //     photo: '',
  //   },
  // });
  // const { errors } = useFormState({ control });

  const myHandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      position_id: positionValue,
      photo: '',
    };

    console.log(newUser);
    // if (contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
    //   return alert(`${data.name} is already in contacts`);
    // }

    // try {
    //   await createNewUser(newUser);
    //   // toast.success('Контакт добавлен');

    // } catch (error) {
    //   // toast.error('Ошибка при добавлении контакта');
    // }
  };

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
      onSubmit={myHandleSubmit}
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
        name="name"
        id="name"
        label="Your Name"
        autoFocus
      />

      <TextField sx={inputStyles} id="email" label="Email" name="email" autoComplete="email" />

      <TextField
        sx={{ ...inputStyles, marginBottom: '29px' }}
        name="phone"
        label="Phone"
        type="phone"
        id="phone"
        autoComplete="phone"
        helperText="+38 (XXX) XXX - XX - XX"
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

      <ButtonPrimary type="submit" variant="contained" sx={{ mt: '50px', margin: '0 auto' }}>
        Sign Up
      </ButtonPrimary>
    </Box>
  );
};
