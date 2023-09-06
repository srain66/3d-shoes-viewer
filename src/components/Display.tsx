import { useViewerDispatch, useViewerState } from "@/hooks/useViewer";
import { OrbitControls } from "@react-three/drei";

interface IProps {}

export default function Display({}: IProps): JSX.Element {
  const { setDisplayMoved } = useViewerDispatch();
  const { controlsRef } = useViewerState();

  const handleStart = () => {
    setTimeout(() => {
      setDisplayMoved(true);
    }, 1000);
  };

  return (
    <>
      <ambientLight />
      <pointLight />
      <mesh>
        <boxGeometry args={[10, 10, 10]} />
      </mesh>
      <OrbitControls ref={controlsRef} onStart={handleStart} />
    </>
  );
}
