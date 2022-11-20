import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { FaBeer } from "react-icons/fa";
import { createMaterialBottomTabNavigator } from "../modules";

import { Home } from "../screens";

import { Routes } from "../utils/enums";

const Tab = createMaterialBottomTabNavigator<PrivateStackParams>();

const barStyle: StyleProp<ViewStyle> = {
  backgroundColor: "#fff",
  position: "absolute",
  overflow: "hidden",
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  elevation: 10,
};

export const TabRoutes = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      inactiveColor="#DADADA"
      activeColor="#283C8C"
      labeled={false}
      barStyle={barStyle}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <FaBeer size={18} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
