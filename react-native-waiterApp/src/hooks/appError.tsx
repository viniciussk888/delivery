import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

import { ErrorElement } from "../components/ErrorElement";

interface AppErrorContextData {
  showErrorAlert: (message: string) => void;
}

interface AppErrorProviderProps {
  children: ReactNode;
}

const AppErrorContext = createContext<AppErrorContextData>(
  {} as AppErrorContextData
);

const AppErrorProvider: FC<AppErrorProviderProps> = ({
  children,
}): JSX.Element => {
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleShowAlert = (message: string | string[]) => {
    if (message instanceof Array) {
      setErrorMessage(message[0]);
      setOpenAlert(true);
      return;
    }

    setErrorMessage(message);
    setOpenAlert(true);
  };

  const handleHiddenAlert = () => {
    setOpenAlert(false);
  };

  return (
    <AppErrorContext.Provider
      value={{
        showErrorAlert: handleShowAlert,
      }}
    >
      {children}
      {openAlert && (
        <ErrorElement onDismiss={handleHiddenAlert} message={errorMessage} />
      )}
    </AppErrorContext.Provider>
  );
};

const useError = (): AppErrorContextData => {
  return useContext(AppErrorContext);
};

export { AppErrorProvider, useError };
