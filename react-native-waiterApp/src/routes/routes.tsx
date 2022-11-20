import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import * as NavigationActions from "../hooks";
//import { useAuth } from '../hooks';
import { NavigationContainerRef } from "../modules";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";

const Routes = () => {
  //const { user } = useAuth();
  const isAuthenticated = true; //user.token;

  return (
    <NavigationContainer
      ref={(navigatorRef: NavigationContainerRef<NavigationParams>): void =>
        NavigationActions.setTopLevelNavigator(navigatorRef)
      }
    >
      {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
