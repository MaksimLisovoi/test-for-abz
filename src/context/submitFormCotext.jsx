import { createContext, useContext, useState } from 'react';

const SuccessContext = createContext();

export const useSuccessForm = () => useContext(SuccessContext);

export const SuccessFormProvider = ({ children }) => {
  const [isMySuccessSubmit, setIsMySuccessSubmit] = useState(false);

  const setSubmitSuccessTrue = () => {
    setIsMySuccessSubmit(true);
  };

  const setSubmitSuccessFalse = () => {
    setIsMySuccessSubmit(false);
  };

  return (
    <SuccessContext.Provider
      value={{ isMySuccessSubmit, setSubmitSuccessTrue, setSubmitSuccessFalse }}
    >
      {children}
    </SuccessContext.Provider>
  );
};
