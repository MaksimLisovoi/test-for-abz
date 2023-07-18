import { createContext, useContext, useState } from 'react';
import { UserState } from '../types';

type UserContextType = {
  setPageState: React.Dispatch<React.SetStateAction<UserState>>;
};

const CardsStateContext = createContext<UserContextType | null>(null);

export const useUserCardsState = () => useContext(CardsStateContext);

export const CardsStateProvider = ({ children }: any) => {
  const [pageState, setPageState] = useState<UserState>({
    page: 1,
    count: 6,
    users: [],
    isLoading: false,
    nextLink: '',
  });

  return (
    <CardsStateContext.Provider value={{ setPageState }}>{children}</CardsStateContext.Provider>
  );
};
