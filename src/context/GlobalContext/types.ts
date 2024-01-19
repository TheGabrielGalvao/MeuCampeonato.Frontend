import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { Page } from "../../types/Navigation";

export interface IGlobalContextData {
  navigation?: Page[];
  navigate: NavigateFunction;
  // handleRedirect: (route: string) => void
}

export interface IGlobalProviderProps {
  children?: ReactNode;
}
