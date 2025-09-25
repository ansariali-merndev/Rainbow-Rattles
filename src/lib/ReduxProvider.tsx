"use client";

import { Provider } from "react-redux";
import { myStore } from "./store";
import { ReactNode } from "react";

export const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={myStore}>{children}</Provider>;
};
