import React from "react";

import { createStackNavigator } from "../modules";

import { Routes } from "../utils/enums";
import { TabRoutes } from "./tab.routes";

const Private = createStackNavigator<PrivateStackParams>();

import { Main } from "../screens";

const defaultOptions = { headerShown: false };

export const PrivateRoutes = (): JSX.Element => {
  return (
    <Private.Navigator
      initialRouteName={Routes.MAIN}
      screenOptions={defaultOptions}
    >
      <Private.Screen name={Routes.TAB_ROUTES} component={TabRoutes} />
      <Private.Screen name={Routes.MAIN} component={Main} />
    </Private.Navigator>
  );
};
