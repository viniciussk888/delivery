const { Routes } = Modules;

declare type PublicStackParams = {
  [Routes.WELCOME]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
};

declare type PrivateStackParams = {
  [Routes.TAB_ROUTES]: undefined;
  [Routes.HOME]: undefined;
  [Routes.WELCOME]: undefined;
  [Routes.MAIN]: undefined;
};

declare type NavigationRoutes = PrivateStackParams & PublicStackParams;

declare type NavigationParams = {
  [key: string]: unknown;
};
