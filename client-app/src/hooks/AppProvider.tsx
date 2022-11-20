import React, { FC, ReactNode } from "react";

import { AppErrorProvider } from "./appError";

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }): JSX.Element => {
  return <AppErrorProvider>{children}</AppErrorProvider>;
};

export { AppProvider };
