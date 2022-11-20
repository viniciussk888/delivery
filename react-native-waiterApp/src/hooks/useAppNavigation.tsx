import { CommonActions, NavigationContainerRef } from '@react-navigation/core';
import { Routes } from '../utils';
export { NavigatorScreenParams } from '@react-navigation/native';

type RouteParams = Record<string, any>;

type PathNavigationRoutes = keyof typeof Routes;

let navigator: NavigationContainerRef<NavigationParams>;

export const useNavigation = (
  routeName: PathNavigationRoutes,
  params?: RouteParams,
) => {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
};

export const setTopLevelNavigator = (
  navigatorRef: NavigationContainerRef<NavigationParams>,
): void => {
  navigator = navigatorRef;
};

export const goBack = (): void => {
  navigator.dispatch(CommonActions.goBack());
};
