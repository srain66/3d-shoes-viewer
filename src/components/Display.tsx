import { OrbitControls } from "@react-three/drei";

interface IProps {
  onStart: () => void;
}

export default function Display({ onStart }: IProps): JSX.Element {
  return (
    <>
      <ambientLight />
      <pointLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <OrbitControls onStart={onStart} />
    </>
  );
}
