import {
  ViewerDispatch,
  ViewerDispatchContext,
  ViewerState,
  ViewerStateContext,
} from "@/contexts/ViewerContext";
import { useContext } from "react";

export const useViewerState = (): ViewerState => {
  const context = useContext<ViewerState>(ViewerStateContext);
  if (!context) {
    throw new Error(
      "The useViewerState hook must be used within the ViewerStateContext."
    );
  }
  return context;
};

export const useViewerDispatch = (): ViewerDispatch => {
  const context = useContext<ViewerDispatch>(ViewerDispatchContext);
  if (!context) {
    throw new Error(
      "The useViewerDispatch hook must be used within the ViewerDispatchContext."
    );
  }
  return context;
};
