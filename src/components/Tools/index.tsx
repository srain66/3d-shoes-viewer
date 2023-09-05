import { useEffect, useRef } from "react";
import ResetButton from "./ResetButton";

interface IProps {
  active: boolean;
  onClick: () => void;
}

export default function Tools({ active, onClick }: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <>
      <div ref={ref} className="w-full p-2 px-4">
        toolbar
      </div>
      <ResetButton active={active} onClick={onClick} />
    </>
  );
}
