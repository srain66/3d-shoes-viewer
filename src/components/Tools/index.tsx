import { useEffect, useRef } from "react";

interface IProps {
  onHeightChange: (current: number) => void;
}

export default function Tools({ onHeightChange }: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    onHeightChange(ref.current.clientHeight);
  });

  return (
    <div ref={ref} className="w-full p-2 px-4">
      toolbar
    </div>
  );
}
