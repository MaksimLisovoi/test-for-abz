import { object, any, string, TypeOf, number } from 'zod';
import * as regex from '../constants/regexes';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg'];

export const registerSchema = object({
  name: string()
    .nonempty('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be less than 60 characters'),
  email: string()
    .nonempty('Email is required!')
    .min(2, 'Email must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(regex.emailRegex, 'Email is invalid!')
    .email('Email is invalid!'),
  phone: string().regex(regex.phoneRegex, 'Number format should be +38 (XXX) XXX - XX - XX'),
  position_id: string(),
  photo: any()
    .refine(file => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      file => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      'Only .jpg, .jpeg formats are supported.',
    ),
});
