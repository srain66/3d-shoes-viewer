import { useViewerDispatch, useViewerState } from "@/hooks/useViewer";
import { defaultColors } from "@/providers/ViewerProvider";
import { HTMLAttributes, useMemo } from "react";
import { RxReset } from "react-icons/rx";
import cls from "classnames";

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export default function ResetColorButton({ ...props }: IProps): JSX.Element {
  const { colors } = useViewerState();
  const { setColors } = useViewerDispatch();
  const handleClick = () => setColors(defaultColors);

  const active: boolean = useMemo(() => colors !== defaultColors, [colors]);

  return (
    <button
      className={cls(
        "w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 text-xl",
        active ? "visible" : "invisible"
      )}
      onClick={handleClick}
      {...props}
    >
      <RxReset />
    </button>
  );
}
