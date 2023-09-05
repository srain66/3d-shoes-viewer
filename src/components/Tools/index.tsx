import { useEffect, useRef } from "react";
import ResetButton from "./ResetButton";

interface IProps {}

export default function Tools({}: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={ref} className="w-full p-2 px-4">
        toolbar
      </div>
      <ResetButton />
    </>
  );
}
