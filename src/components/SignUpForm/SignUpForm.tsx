import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ButtonPrimary } from '../Base.styled';
import { useEffect, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '../../services/validation';
import { TextFieldBlock } from './TextFieldBlock';
import { PositionsBlock } from './PositionsBlock';
import { FileInputBlock } from './FileInputBlock';
import { SuccessImage } from './SuccessImage';
import { useSuccessForm } from '../../context/submitFormCotext';
import { createNewUser, getToken } from '../../services/userApi';

type RegisterInput = TypeOf<typeof registerSchema>;

export const SignUpForm = (): JSX.Element => {
  const { setSubmitSuccessTrue } = useSuccessForm();
  const [shouldShowImg, setShouldShowImg] = useState(false);
  // const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors, isSubmitSuccessful, isValid },
    reset,
    handleSubmit,
  } = useForm<RegisterInput>({
    mode: 'all',
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = data => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('position_id', data.position_id);
    formData.append('photo', data.photo[0]);
    setSubmitSuccessTrue();
    setShouldShowImg(true);
    getToken().then(token => createNewUser(formData, token));
  };

  return (
    <>
      {shouldShowImg ? (
        <SuccessImage />
      ) : (
        <Box>
          <Typography
            sx={{ display: shouldShowImg ? 'none' : '' }}
            align="center"
            variant="h1"
            component="h2"
            mb="50px"
          >
            Working with POST request
          </Typography>
          <Box
            onSubmit={handleSubmit(onSubmitHandler)}
            component="form"
            id="sign-up"
            sx={{
              color: 'black',
              width: '100%',
              maxWidth: '380px',
              display: 'flex',
              margin: '0 auto',
              flexDirection: 'column',
            }}
          >
            <TextFieldBlock register={register} errors={errors} />
            <PositionsBlock register={register} />
            <FileInputBlock
              isSubmitSuccessful={isSubmitSuccessful}
              register={register}
              errors={errors}
            />

            <ButtonPrimary
              disabled={!isValid}
              type="submit"
              variant="contained"
              sx={{ mt: '50px', margin: '0 auto' }}
            >
              Sign Up
            </ButtonPrimary>
          </Box>
        </Box>
      )}
    </>
  );
};
