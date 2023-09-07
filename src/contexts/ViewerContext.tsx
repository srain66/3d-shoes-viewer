import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  createContext,
} from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

export interface ViewerState {
  canvasRef: MutableRefObject<HTMLCanvasElement>;
  controlsRef: MutableRefObject<OrbitControlsImpl>;
  displayMoved: boolean;
}
export interface ViewerDispatch {
  setDisplayMoved: Dispatch<SetStateAction<boolean>>;
}

export const ViewerStateContext = createContext<ViewerState>({
  canvasRef: null!,
  controlsRef: null!,
  displayMoved: null!,
});

export const ViewerDispatchContext = createContext<ViewerDispatch>({
  setDisplayMoved: () => {},
});
