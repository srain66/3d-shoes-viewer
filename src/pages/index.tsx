import Layout from "@/components/Layout";
import ResetButton from "@/components/ResetButton";
import Toolbar from "@/components/Toolbar";
import Viewer from "@/components/Viewer";
import { Canvas } from "@react-three/fiber";
import { useMemo, useState } from "react";
import { Vector3 } from "three";

export default function Home() {
  const defaultPosition = useMemo(() => new Vector3(30, 40, 60), []);

  const [height, setHeight] = useState<number>();
  const [hasMoved, setHasMoved] = useState<boolean>(false);

  const handleHeightChange = (current: number) => setHeight(current);
  const handleStart = () => setHasMoved(true);

  const handleClick = () => {
    setHasMoved(false);
  };

  return (
    <Layout className="w-screen h-screen">
      <div className="W-full h-full" style={{ paddingBottom: height }}>
        <Canvas
          className="w-full h-full"
          camera={{ position: defaultPosition }}
        >
          <Viewer onStart={handleStart} />
        </Canvas>
      </div>
      <Toolbar onHeightChange={handleHeightChange} />
      <ResetButton active={hasMoved} onClick={handleClick} />
    </Layout>
  );
}
