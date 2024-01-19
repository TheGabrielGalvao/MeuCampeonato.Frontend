import { ReactNode } from "react";
import { AuthModel } from "../../models/AuthModel";

export interface IAuthContextData {
  isAuthenticated: boolean;
  login: (data: AuthModel) => void;
  logout: () => void;
  token: string | null;
}

export interface IAuthProviderProps {
  children?: ReactNode;
}
