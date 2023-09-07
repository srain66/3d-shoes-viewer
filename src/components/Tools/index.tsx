import { useRef } from "react";

import ResetButton from "./ResetButton";
import CaptureButton from "./CaptureButton";
import SelectColor from "./SelectColor";

interface IProps {}

export default function Tools({}: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={ref} className="w-full h-20 p-4 flex items-center">
        <SelectColor />
        <div className="flex-none ml-auto">
          <CaptureButton />
        </div>
      </div>
      <ResetButton />
    </>
  );
}
