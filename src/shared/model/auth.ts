export interface User {
  id?: string;
  email?: string;
  name?: string;
}

export type RegisterLoginResponse = {
  accessToken: string;
  user: User;
};

export interface AuthContextValue {
  isLoggedIn: boolean;
  isLoading: boolean;
  token: string | null;
  user: User | null;
  logout: () => void;
  login: (token: string) => Promise<void>;
  refresh: () => Promise<void>;
}

export interface UserMe {
  id?: string;
  email: string;
  name: string;
  avatarPath: string;
  about: string;
  phone: string;
  password: string;
  roles: string[];
}

export type LocationState = { from?: { pathname?: string } };
