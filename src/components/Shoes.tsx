import { ShoesModelGLTFResult } from "@/interfaces/Shoes";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Suspense } from "react";

interface IProps extends GroupProps {}

export default function Shoes({ ...props }: IProps): JSX.Element {
  const { nodes } = useGLTF("/assets/shoes.glb") as ShoesModelGLTFResult;

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <group>
          <mesh geometry={nodes[`Left_OuterEyelet`].geometry}>
            <meshPhysicalMaterial color={"white"} />
          </mesh>

          <mesh geometry={nodes[`Left_InnerEyelet`].geometry}>
            <meshPhysicalMaterial color={"white"} />
          </mesh>
        </group>

        <mesh geometry={nodes[`Left_Vamp`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_Tongue`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <group name={`Left_ShoeLace`}>
          <mesh geometry={nodes[`Left_ShoeLace1`].geometry}>
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh geometry={nodes[`Left_ShoeLace2`].geometry}>
            <meshStandardMaterial color={"white"} />
          </mesh>
          <mesh geometry={nodes[`Left_ShoeLace3`].geometry}>
            <meshStandardMaterial color={"white"} />
          </mesh>
        </group>

        <mesh geometry={nodes[`Left_ToeCap`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_Upper`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_InnerBackCounter`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_BackLine`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_Sole`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>

        <mesh geometry={nodes[`Left_TopLine`].geometry}>
          <meshStandardMaterial color={"white"} />
        </mesh>
      </group>
    </Suspense>
  );
}

useGLTF.preload("/assets/shoes.glb");
