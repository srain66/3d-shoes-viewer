import Display from "@/components/Display";
import ResetButton from "@/components/Tools/ResetButton";
import Tools from "@/components/Tools";
import { Canvas } from "@react-three/fiber";
import { HTMLAttributes, useMemo, useState } from "react";
import { Vector3 } from "three";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export default function Viewer({ ...props }: IProps): JSX.Element {
  const defaultPosition = useMemo(() => new Vector3(30, 40, 60), []);

  const [height, setHeight] = useState<number>();
  const [hasMoved, setHasMoved] = useState<boolean>(false);

  const handleHeightChange = (current: number) => setHeight(current);
  const handleStart = () => setHasMoved(true);

  const handleClick = () => {
    setHasMoved(false);
  };

  return (
    <div {...props}>
      <Canvas camera={{ position: defaultPosition }}>
        <Display onStart={handleStart} />
      </Canvas>
      <Tools
        onHeightChange={handleHeightChange}
        active={hasMoved}
        onClick={handleClick}
      />
    </div>
  );
}
