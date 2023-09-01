import { Canvas, CanvasProps } from "@react-three/fiber";

export function Viewer(): JSX.Element {
  return (
    <Canvas className="w-full h-full">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </Canvas>
  );
}
