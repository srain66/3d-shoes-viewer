import Toolbar from "@/components/Toolbar";
import Viewer from "@/components/Viewer";
import { useState } from "react";

export default function Home() {
  const [height, setHeight] = useState<number>();

  const handleHeightChange = (current: number) => setHeight(current);

  return (
    <div className="w-screen h-screen">
      <div className="W-full h-full" style={{ paddingBottom: height }}>
        <Viewer />
      </div>
      <Toolbar onHeightChange={handleHeightChange} />
    </div>
  );
}
