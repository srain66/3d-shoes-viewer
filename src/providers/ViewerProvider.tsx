import {
  ViewerDispatchContext,
  ViewerStateContext,
} from "@/contexts/ViewerContext";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export default function ViewerProvider({ children }: IProps): JSX.Element {
  const stateValue = {};
  const dispatchValue = {};

  return (
    <ViewerDispatchContext.Provider value={dispatchValue}>
      <ViewerStateContext.Provider value={stateValue}>
        {children}
      </ViewerStateContext.Provider>
    </ViewerDispatchContext.Provider>
  );
}
