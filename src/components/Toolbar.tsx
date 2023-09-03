import { useEffect, useRef } from "react";

interface IProps {
  onHeightChange: (current: number) => void;
}

export default function Toolbar({ onHeightChange }: IProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    onHeightChange(ref.current.clientHeight);
  });

  return (
    <div ref={ref} className="w-full fixed bottom-0 left-0 p-2 px-4">
      toolbar
    </div>
  );
}
