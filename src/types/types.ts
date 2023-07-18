import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type User = {
  email: string;
  id: number;
  name: string;
  phone: string;
  photo: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
};

export type UserCardType = { user: User };

export type UserState = {
  page: number;
  count: number;
  users: User[] | [];
  isLoading: boolean;
  nextLink: string | null;
};

export type Position = {
  id: number;
  name: string;
};

export type PositionsState = Position[] | [];

export type createNewUserType = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  position_id: number;
  photo: FileList;
};

export type formUserType = {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: Blob;
};

export type ReactHookFormRegisterType = UseFormRegister<{
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: FileList;
}>;

export type ReactHookFormErrorsType = FieldErrors<{
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: FileList;
}>;

export type PositionsBlockPropsType = {
  register: ReactHookFormRegisterType;
};

export type TextFieldBlockProps = {
  register: ReactHookFormRegisterType;
  errors: ReactHookFormErrorsType;
};

export type fileBlockProps = {
  register: ReactHookFormRegisterType;
  errors: ReactHookFormErrorsType;
  isSubmitSuccessful: boolean;
};
