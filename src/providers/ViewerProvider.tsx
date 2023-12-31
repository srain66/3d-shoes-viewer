import {
  ViewerDispatchContext,
  ViewerStateContext,
} from "@/contexts/ViewerContext";
import { Colors, LaceColor, MetalColor, SoleColor } from "@/interfaces/Colors";
import { ReactNode, useEffect, useRef, useState } from "react";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

interface IProps {
  children: ReactNode;
}

export const defaultColors = {
  background: "#eeeeee",
  point: "#B84900",
  primary: "#232323",
  secondary: "#111111",
  lace: LaceColor.BLACK,
  metal: MetalColor.BLACK,
  sole: SoleColor.BLACK,
};

export default function ViewerProvider({ children }: IProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const controlsRef = useRef<OrbitControlsImpl>(null!);

  const [colors, setColors] = useState<Colors>(defaultColors);
  const [displayMoved, setDisplayMoved] = useState<boolean>(false);

  const stateValue = { canvasRef, controlsRef, colors, displayMoved };
  const dispatchValue = { setColors, setDisplayMoved };

  return (
    <ViewerDispatchContext.Provider value={dispatchValue}>
      <ViewerStateContext.Provider value={stateValue}>
        {children}
      </ViewerStateContext.Provider>
    </ViewerDispatchContext.Provider>
  );
}
