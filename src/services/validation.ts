// import { object, any, string, TypeOf, number, instanceof } from 'zod';
import z from 'zod';
import * as regex from '../constants/regexes';

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg'];

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name must be less than 60 characters'),
  email: z.string().nonempty('Email is required!').min(2, 'Email must be at least 2 characters'),
  // .max(100, 'Name must be less than 100 characters')
  // .regex(regex.emailRegex, 'Email must be a valid email!')
  // .email('Email is invalid!'),
  phone: z.string(),
  // .regex(regex.phoneRegex, 'Number format should be +38 (XXX) XXX - XX - XX'),
  position_id: z.string(),
  photo: z
    .instanceof(FileList)
    .refine(selectImage => selectImage.length !== 0, `Image is required.`)
    .refine(selectImage => selectImage?.[0]?.size < MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      selectImage => ACCEPTED_IMAGE_TYPES.includes(selectImage?.[0]?.type),
      'Only .jpg, .jpeg formats are supported.',
    ),
});
