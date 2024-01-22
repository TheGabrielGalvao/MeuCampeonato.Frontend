import { ReactNode } from "react";
import { AuthModel } from "../../models/AuthModel";
import { UserModel } from "../../models/UserModel";

export interface IAuthContextData {
  isAuthenticated: boolean;
  userInfo?: UserModel;
  login: (data: AuthModel) => Promise<boolean>;
  logout: () => void;
  handleSetUserInfo: (data: UserModel) => void;
  token: string | null;
}

export interface IAuthProviderProps {
  children?: ReactNode;
}
