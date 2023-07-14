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
};

export type Position = {
  id: string;
  name: string;
};

export type PositionsState = Position[] | [];

export type createNewUserType = {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  position_id: number;
  photo: string;
};

export type formUserType = {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: string;
};
