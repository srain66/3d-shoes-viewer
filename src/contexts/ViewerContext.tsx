import { createContext } from "react";

export interface ViewerState {}
export interface ViewerDispatch {}

export const ViewerStateContext = createContext<ViewerState>({});
export const ViewerDispatchContext = createContext<ViewerDispatch>({});
