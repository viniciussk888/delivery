import React from "react";
import { StyleProp, ViewStyle } from "react-native";

import { createMaterialBottomTabNavigator } from "../modules";
import { Feather } from "@expo/vector-icons";

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
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.51,
  shadowRadius: 13.16,
};

export const TabRoutes = (): JSX.Element => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.HOME}
      inactiveColor="#DADADA"
      activeColor="#d73035"
      labeled={true}
      barStyle={barStyle}
    >
      <Tab.Screen
        name={Routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={22} color={color} />
          ),
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
    </Tab.Navigator>
  );
};
