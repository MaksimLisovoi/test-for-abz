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
  users: User[];
  isLoading: boolean;
};
