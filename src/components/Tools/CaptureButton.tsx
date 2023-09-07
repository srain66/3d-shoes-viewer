import { HTMLAttributes } from "react";
import { AiFillCamera } from "react-icons/ai";
import { useViewerState } from "@/hooks/useViewer";
import captureCanvas from "@/utils/capture";

interface IProps extends HTMLAttributes<HTMLButtonElement> {}

export default function CaptureButton({ ...props }: IProps): JSX.Element {
  const { canvasRef } = useViewerState();
  const handleClick = () => captureCanvas(canvasRef.current);

  return (
    <button
      onClick={handleClick}
      {...props}
      className="flex items-center gap-2 p-3 px-4 rounded bg-sky-500 text-white hover:bg-sky-700 hover:text-sky-100"
    >
      <AiFillCamera className="text-2xl" />
      CAPTURE
    </button>
  );
}
