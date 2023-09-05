import Display from "@/components/Display";
import Layout from "@/components/Layout";
import ResetButton from "@/components/ResetButton";
import Tools from "@/components/Tools";
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
          <Display onStart={handleStart} />
        </Canvas>
      </div>
      <Tools onHeightChange={handleHeightChange} />
      <ResetButton active={hasMoved} onClick={handleClick} />
    </Layout>
  );
}
