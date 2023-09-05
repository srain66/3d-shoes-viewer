import {
  ViewerDispatchContext,
  ViewerStateContext,
} from "@/contexts/ViewerContext";
import { ReactNode, useRef, useState } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface IProps {
  children: ReactNode;
}

export default function ViewerProvider({ children }: IProps): JSX.Element {
  const controlsRef = useRef<OrbitControlsImpl>(null!);

  const [displayMoved, setDisplayMoved] = useState<boolean>(false);

  const stateValue = { controlsRef, displayMoved };
  const dispatchValue = { setDisplayMoved };

  return (
    <ViewerDispatchContext.Provider value={dispatchValue}>
      <ViewerStateContext.Provider value={stateValue}>
        {children}
      </ViewerStateContext.Provider>
    </ViewerDispatchContext.Provider>
  );
}
