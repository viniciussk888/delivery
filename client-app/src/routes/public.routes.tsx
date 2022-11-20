import React from "react";

import { createStackNavigator } from "../modules";

import { Login, Welcome } from "../screens";

import { Routes } from "../utils/enums";

const Public = createStackNavigator<PublicStackParams>();

const defaultOptions = { headerShown: false };

export const PublicRoutes = (): JSX.Element => {
  return (
    <Public.Navigator
      initialRouteName={Routes.WELCOME}
      screenOptions={defaultOptions}
    >
      <Public.Screen name={Routes.WELCOME} component={Welcome} />
      <Public.Screen name={Routes.LOGIN} component={Login} />
    </Public.Navigator>
  );
};
