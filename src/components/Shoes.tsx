import { useViewerState } from "@/hooks/useViewer";
import { ShoesModelGLTFResult } from "@/interfaces/Shoes";
import { MeshReflectorMaterial, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Suspense } from "react";

interface IProps extends GroupProps {}

export default function Shoes({ ...props }: IProps): JSX.Element {
  const { colors } = useViewerState();
  const { nodes } = useGLTF(
    `${process.env.NEXT_PUBLIC_ASSET_URL}/assets/shoes.glb`
  ) as ShoesModelGLTFResult;

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <group name="Eyelet">
          <mesh geometry={nodes[`Left_OuterEyelet`].geometry}>
            <meshPhysicalMaterial
              color={colors.metal}
              metalness={1}
              roughness={0.1}
            />
          </mesh>

          <mesh geometry={nodes[`Left_InnerEyelet`].geometry}>
            <meshPhysicalMaterial
              color={colors.metal}
              metalness={1}
              roughness={0.1}
            />
          </mesh>
        </group>

        <mesh geometry={nodes[`Left_Vamp`].geometry}>
          <meshPhysicalMaterial
            color={colors.point}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        <mesh geometry={nodes[`Left_Tongue`].geometry}>
          <meshPhysicalMaterial
            color={colors.point}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        <group name="ShoeLace">
          <mesh geometry={nodes[`Left_ShoeLace1`].geometry}>
            <meshStandardMaterial
              color={colors.lace}
              metalness={0}
              roughness={1}
            />
          </mesh>
          <mesh geometry={nodes[`Left_ShoeLace2`].geometry}>
            <meshStandardMaterial
              color={colors.lace}
              metalness={0}
              roughness={1}
            />
          </mesh>
          <mesh geometry={nodes[`Left_ShoeLace3`].geometry}>
            <meshStandardMaterial
              color={colors.lace}
              metalness={0}
              roughness={1}
            />
          </mesh>
        </group>

        <mesh geometry={nodes[`Left_ToeCap`].geometry}>
          <meshStandardMaterial
            color={colors.secondary}
            metalness={0.1}
            roughness={0.5}
          />
        </mesh>

        <mesh geometry={nodes[`Left_Upper`].geometry}>
          <meshStandardMaterial
            color={colors.primary}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>

        <mesh geometry={nodes[`Left_InnerBackCounter`].geometry}>
          <meshStandardMaterial
            color={colors.primary}
            metalness={0}
            roughness={0.8}
            side={1}
          />
        </mesh>

        <mesh geometry={nodes[`Left_BackLine`].geometry}>
          <meshStandardMaterial
            color={colors.point}
            metalness={0.1}
            roughness={0.5}
          />
        </mesh>

        <mesh geometry={nodes[`Left_Sole`].geometry}>
          <meshStandardMaterial
            color={colors.sole}
            metalness={0}
            roughness={1}
          />
        </mesh>

        <mesh geometry={nodes[`Left_TopLine`].geometry}>
          <meshStandardMaterial
            color={colors.point}
            metalness={0.1}
            roughness={0.8}
          />
        </mesh>
      </group>
    </Suspense>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_ASSET_URL}/assets/shoes.glb`);
