import { OrbitControls } from "@react-three/drei";

interface IProps {}

export default function Display({}: IProps): JSX.Element {
  return (
    <>
      <ambientLight />
      <pointLight />
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
      </mesh>
      <OrbitControls />
    </>
  );
}
