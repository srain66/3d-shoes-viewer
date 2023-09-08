import { BiReset } from "react-icons/bi";
import cls from "classnames";
import { HTMLAttributes } from "react";
import { useViewerDispatch, useViewerState } from "@/hooks/useViewer";

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export default function ResetButton({ ...props }: IProps): JSX.Element {
  const { displayMoved, controlsRef } = useViewerState();
  const { setDisplayMoved } = useViewerDispatch();

  const handleClick = () => {
    controlsRef.current.reset();
    setDisplayMoved(false);
  };

  return (
    <button
      title="Reset Camera"
      className={cls(
        "fixed right-4  w-12 h-12 rounded-full transition text-xl flex justify-center items-center bg-white drop-shadow hover:bg-red-500 hover:text-red-100 transition-all duration-300",
        displayMoved ? "top-4" : "-top-20"
      )}
      onClick={handleClick}
      {...props}
    >
      <BiReset />
    </button>
  );
}
