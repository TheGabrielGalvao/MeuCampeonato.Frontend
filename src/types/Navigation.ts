import { ReactNode } from "react";

export interface Page {
  id: number;
  name: string;
  label?: string;
  element?: ReactNode;
  route: string;
  exact?: boolean;
  private?: boolean;
}
