import { useRef } from "react";
import ResetButton from "./ResetButton";
import CaptureButton from "./CaptureButton";

interface IProps {}

export default function Tools({}: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={ref} className="w-full p-2 flex items-center">
        <div>Toolbar</div>
        <div className="flex-none ml-auto">
          <CaptureButton />
        </div>
      </div>
      <ResetButton />
    </>
  );
}
