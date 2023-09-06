import { Mesh } from "three";
import { GLTF } from "three-stdlib";

export interface ShoesModelGLTFResult extends GLTF {
  nodes: {
    Left_Upper: Mesh;
    Left_Sole: Mesh;
    Left_Tongue: Mesh;
    Left_Vamp: Mesh;
    Left_ToeCap: Mesh;
    Left_InnerBackCounter: Mesh;
    Left_TopLine: Mesh;
    Left_InnerEyelet: Mesh;
    Left_OuterEyelet: Mesh;
    Left_ShoeLace1: Mesh;
    Left_ShoeLace2: Mesh;
    Left_ShoeLace3: Mesh;
    Left_BackLine: Mesh;
    Right_Upper: Mesh;
    Right_Sole: Mesh;
    Right_Tongue: Mesh;
    Right_Vamp: Mesh;
    Right_ToeCap: Mesh;
    Right_InnerBackCounter: Mesh;
    Right_TopLine: Mesh;
    Right_InnerEyelet: Mesh;
    Right_OuterEyelet: Mesh;
    Right_ShoeLace1: Mesh;
    Right_ShoeLace2: Mesh;
    Right_ShoeLace3: Mesh;
    Right_BackLine: Mesh;
  };
  materials: {};
}
