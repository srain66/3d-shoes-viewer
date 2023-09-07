import Display from "@/components/Display";
import Tools from "@/components/Tools";
import { useViewerState } from "@/hooks/useViewer";
import { Canvas } from "@react-three/fiber";
import { HTMLAttributes, useMemo } from "react";
import { Vector3 } from "three";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export default function Viewer({ ...props }: IProps): JSX.Element {
  const defaultPosition = useMemo(() => new Vector3(30, 40, 60), []);
  const { canvasRef } = useViewerState();

  return (
    <div {...props}>
      <Canvas
        ref={canvasRef}
        camera={{ position: defaultPosition }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Display />
      </Canvas>
      <Tools />
    </div>
  );
}
