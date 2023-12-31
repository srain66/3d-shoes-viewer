import { useViewerDispatch, useViewerState } from "@/hooks/useViewer";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import Shoes from "./Shoes";
import { Suspense } from "react";

interface IProps {}

export default function Display({}: IProps): JSX.Element {
  const { setDisplayMoved } = useViewerDispatch();
  const { controlsRef, colors } = useViewerState();

  const handleStart = () => {
    setTimeout(() => {
      setDisplayMoved(true);
    }, 1000);
  };

  return (
    <Suspense fallback={null}>
      <color attach="background" args={[colors.background]} />
      <ambientLight />
      <pointLight intensity={100} distance={10} />
      <Center rotation={[0, 2.5, 0]}>
        <Shoes />
      </Center>
      <OrbitControls
        ref={controlsRef}
        onStart={handleStart}
        enablePan={false}
        minDistance={20}
        maxDistance={140}
      />
      <Environment preset="warehouse" />
    </Suspense>
  );
}
