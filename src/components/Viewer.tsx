import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

export default function Viewer(): JSX.Element {
  const [_hasMoved, setHasMoved] = useState(false);
  const handleChange = () => setHasMoved(true);

  return (
    <>
      <ambientLight />
      <pointLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
      <OrbitControls onChange={handleChange} />
    </>
  );
}
