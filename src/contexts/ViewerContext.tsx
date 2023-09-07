import { Colors } from "@/interfaces/Colors";
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
  colors: Colors;
  displayMoved: boolean;
}
export interface ViewerDispatch {
  setColors: Dispatch<SetStateAction<Colors>>;
  setDisplayMoved: Dispatch<SetStateAction<boolean>>;
  resetColors: () => void;
}

export const ViewerStateContext = createContext<ViewerState>({
  canvasRef: null!,
  controlsRef: null!,
  colors: null!,
  displayMoved: null!,
});

export const ViewerDispatchContext = createContext<ViewerDispatch>({
  setColors: () => {},
  setDisplayMoved: () => {},
  resetColors: () => {},
});
