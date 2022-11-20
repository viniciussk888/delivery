declare type AuthLoginData = {
  username: string;
  password: string;
  type?: string;
};

declare type AuthLoginResponseData = {
  token: Token;
  user: {
    id: number;
    name: string;
    email: string;
  };
  permissions: Array<string>;
  photo: string;
};

declare type UserData = {
  token: Token;
  user: {
    id: number;
    name: string;
    email: string;
  };
  permissions: Array<string>;
  photo: string;
};

declare type ForgotPasswordRequestData = {
  username: string;
  type: string;
};

declare type Token = string;
