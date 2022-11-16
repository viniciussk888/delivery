import { GlobalStyles } from "./styles/GlobalStyles";
import React from "react";

import { Header } from "./components/Header";
import { Orders } from "./components/Orders";

export function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Orders />
    </React.Fragment>
  );
}
