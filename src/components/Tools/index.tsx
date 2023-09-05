import { useEffect, useRef } from "react";
import ResetButton from "./ResetButton";

interface IProps {
  onHeightChange: (current: number) => void;
  active: boolean;
  onClick: () => void;
}

export default function Tools({
  onHeightChange,
  active,
  onClick,
}: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    onHeightChange(ref.current.clientHeight);
  });

  return (
    <>
      <div ref={ref} className="w-full p-2 px-4">
        toolbar
      </div>
      <ResetButton active={active} onClick={onClick} />
    </>
  );
}
