import Display from "@/components/Display";
import Tools from "@/components/Tools";
import { useViewerState } from "@/hooks/useViewer";
import { Canvas } from "@react-three/fiber";
import { HTMLAttributes, useMemo } from "react";
import { Vector3 } from "three";

interface IProps extends HTMLAttributes<HTMLDivElement> {}

export default function Viewer({ ...props }: IProps): JSX.Element {
  const defaultPosition = useMemo(() => new Vector3(20, 30, 50), []);
  const { canvasRef } = useViewerState();

  return (
    <div {...props}>
      <Canvas
        ref={canvasRef}
        camera={{ position: defaultPosition }}
        gl={{ preserveDrawingBuffer: true }}
        style={{ cursor: "grab" }}
      >
        <Display />
      </Canvas>
      <Tools />
    </div>
  );
}
